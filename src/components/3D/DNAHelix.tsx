import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import type { Group, Mesh, Vector3 } from 'three';

interface DNAProps {
    points: number;
    radius: number;
    height: number;
}

const DNAStrand: React.FC<DNAProps> = ({ points, radius, height }) => {
    const groupRef = useRef<Group>(null);
    const meshRefs = useRef<Mesh[]>([]);

    // Generate DNA structure points
    const { bases, backbones } = useMemo(() => {
        const bases: Vector3[] = [];
        const backbones: Vector3[] = [];

        for (let i = 0; i <= points; i++) {
            const theta = (i / points) * Math.PI * 4;
            const y = (i / points) * height - height / 2;

            // First strand
            bases.push(
                new THREE.Vector3(
                    Math.cos(theta) * radius,
                    y,
                    Math.sin(theta) * radius
                )
            );

            // Second strand (offset by PI)
            bases.push(
                new THREE.Vector3(
                    Math.cos(theta + Math.PI) * radius,
                    y,
                    Math.sin(theta + Math.PI) * radius
                )
            );

            // Connect bases
            if (i % 2 === 0) {
                backbones.push(
                    new THREE.Vector3(
                        Math.cos(theta) * radius * 0.8,
                        y,
                        Math.sin(theta) * radius * 0.8
                    ),
                    new THREE.Vector3(
                        Math.cos(theta + Math.PI) * radius * 0.8,
                        y,
                        Math.sin(theta + Math.PI) * radius * 0.8
                    )
                );
            }
        }

        return { bases, backbones };
    }, [points, radius, height]);

    // Animation
    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
            meshRefs.current.forEach((mesh, i) => {
                if (mesh) {
                    mesh.scale.setScalar(
                        1 + Math.sin(clock.getElapsedTime() * 2 + i * 0.1) * 0.1
                    );
                }
            });
        }
    });

    return (
        <group ref={groupRef}>
            {/* Base pairs */}
            {bases.map((point, i) => (
                <mesh
                    key={`base-${i}`}
                    position={point}
                    ref={(el) => (meshRefs.current[i] = el!)}
                >
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshPhysicalMaterial
                        color={i % 2 === 0 ? "#60A5FA" : "#5EEAD4"}
                        emissive={i % 2 === 0 ? "#1E40AF" : "#0F766E"}
                        emissiveIntensity={0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            ))}

            {/* Backbone connections */}
            {backbones.map((point, i) => (
                <mesh
                    key={`backbone-${i}`}
                    position={point}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
                    <meshPhysicalMaterial
                        color="#94A3B8"
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={1}
                    />
                </mesh>
            ))}
        </group>
    );
};

interface DnaHelixProps {
    className?: string;
}

export const DnaHelix: React.FC<DnaHelixProps> = ({ className }) => {
    return (
        <div className={className || "w-full h-full min-h-[600px]"}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                {/*<color attach="background" args={["#000814"]} />*/}
                {/*<fog attach="fog" args={["#000814", 5, 15]} />*/}

                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Float
                    speed={2}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                >
                    <DNAStrand points={20} radius={2} height={8} />
                </Float>

                {/* Optional performance monitoring */}
                {/* <Perf position="top-left" /> */}
            </Canvas>
        </div>
    );
};