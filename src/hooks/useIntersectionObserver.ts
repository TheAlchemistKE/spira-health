import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
                                            threshold = 0,
                                            root = null,
                                            rootMargin = '0px',
                                            freezeOnceVisible = true
                                        }: UseIntersectionObserverProps = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<Element | null>(null);
    const frozen = useRef(false);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;

                if (freezeOnceVisible && isElementIntersecting && frozen.current) {
                    return;
                }

                setIsIntersecting(isElementIntersecting);

                if (freezeOnceVisible && isElementIntersecting) {
                    frozen.current = true;
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return [elementRef, isIntersecting] as const;
};
