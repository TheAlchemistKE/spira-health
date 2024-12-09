import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import type { Group, Mesh, Line } from 'three';

// Interfaces
interface ParticleProps {
    count: number;
    color: string;
}

interface IconElementProps {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    color: string;
    text: string;
}

interface ConnectionLineProps {
    start: [number, number, number];
    end: [number, number, number];
    color: string;
}

interface FloatingElementsProps {
    className?: string;
}

// Particle Field Component
const ParticleField: React.FC<ParticleProps> = ({ count, color }) => {
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const radius = 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            temp.push({
                position: [
                    radius * Math.sin(phi) * Math.cos(theta),
                    radius * Math.sin(phi) * Math.sin(theta),
                    radius * Math.cos(phi)
                ] as [number, number, number],
                scale: Math.random() * 0.2 + 0.1,
                speed: Math.random() * 0.2 + 0.1
            });
        }
        return temp;
    }, [count]);

    const groupRef = useRef<Group>(null);
    const meshRefs = useRef<Mesh[]>([]);

    useFrame(({ clock }) => {
        meshRefs.current.forEach((mesh, i) => {
            if (mesh) {
                const time = clock.getElapsedTime() * particles[i].speed;
                mesh.position.y += Math.sin(time) * 0.01;
                mesh.rotation.x = time * 0.5;
                mesh.rotation.z = time * 0.3;
            }
        });
    });

    return (
        <group ref={groupRef}>
            <Instances limit={count}>
                <dodecahedronGeometry args={[0.2, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                />
                {particles.map((particle, i) => (
                    <Instance
                        key={i}
                        position={particle.position}
                        scale={particle.scale}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-expect-error
                        ref={el => meshRefs.current[i] = el!}
                    />
                ))}
            </Instances>
        </group>
    );
};

// Icon Element Component
const IconElement: React.FC<IconElementProps> = ({
                                                     position,
                                                     rotation,
                                                     scale,
                                                     color,
                                                     text
                                                 }) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
            meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text3D
                ref={meshRef}
                font="/fonts/helvetiker_regular.typeface.json"
                size={scale}
                height={scale * 0.1}
                position={position}
                rotation={rotation}
            >
                {text}
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </Text3D>
        </Float>
    );
};

// Connection Line Component
const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, color }) => {
    const lineRef = useRef<Line>(null);

    const points = useMemo(() => {
        const startVec = new THREE.Vector3(...start);
        const endVec = new THREE.Vector3(...end);
        const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
        midPoint.y += 1;

        const curve = new THREE.QuadraticBezierCurve3(
            startVec,
            midPoint,
            endVec
        );

        return curve.getPoints(50);
    }, [start, end]);

    useFrame(({ clock }) => {
        if (lineRef.current && lineRef.current.material) {
            const material = lineRef.current.material as THREE.LineBasicMaterial;
            material.opacity = 0.2 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
        }
    });


    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <line ref={lineRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial
                color={color}
                transparent
                opacity={0.3}
                linewidth={1}
            />
        </line>
    );
};

// Main FloatingElements Component
export const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
    const iconElements = [
        {
            text: "⚕️",
            position: [-2, 1, 0] as [number, number, number],
            rotation: [0, 0, 0] as [number, number, number],
            scale: 0.5,
            color: "#60A5FA"
        },
        {
            text: "🏥",
            position: [2, -1, 0] as [number, number, number],
            rotation: [0, Math.PI * 0.1, 0] as [number, number, number],
            scale: 0.5,
            color: "#5EEAD4"
        },
        {
            text: "🧬",
            position: [0, 2, 0] as [number, number, number],
            rotation: [0, -Math.PI * 0.1, 0] as [number, number, number],
            scale: 0.5,
            color: "#A78BFA"
        },
        {
            text: "💊",
            position: [-1, -2, 0] as [number, number, number],
            rotation: [0, Math.PI * 0.05, 0] as [number, number, number],
            scale: 0.5,
            color: "#34D399"
        }
    ];

    const connections = useMemo(() => {
        const result = [];
        for (let i = 0; i < iconElements.length; i++) {
            for (let j = i + 1; j < iconElements.length; j++) {
                const distance = new THREE.Vector3()
                    .fromArray(iconElements[i].position)
                    .distanceTo(new THREE.Vector3().fromArray(iconElements[j].position));

                if (distance < 4) {
                    result.push({
                        start: iconElements[i].position,
                        end: iconElements[j].position,
                        color: new THREE.Color(iconElements[i].color)
                            .lerp(new THREE.Color(iconElements[j].color), 0.5)
                            .getStyle()
                    });
                }
            }
        }
        return result;
    }, [iconElements]);

    return (
        <div className={className || "w-full h-full min-h-[600px]"}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >
                <color attach="background" args={["#000814"]} />
                <fog attach="fog" args={["#000814", 5, 15]} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Particle Fields */}
                <ParticleField count={100} color="#60A5FA" />
                <ParticleField count={75} color="#5EEAD4" />

                {/* Connections */}
                {connections.map((connection, index) => (
                    <ConnectionLine
                        key={`connection-${index}`}
                        start={connection.start}
                        end={connection.end}
                        color={connection.color}
                    />
                ))}

                {/* Icon Elements */}
                {iconElements.map((element, index) => (
                    <IconElement
                        key={`icon-${index}`}
                        {...element}
                    />
                ))}

                {/* Background Glow */}
                <mesh position={[0, 0, -5]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshBasicMaterial
                        color="#1E40AF"
                        transparent
                        opacity={0.1}
                    />
                </mesh>
            </Canvas>
        </div>
    );
};