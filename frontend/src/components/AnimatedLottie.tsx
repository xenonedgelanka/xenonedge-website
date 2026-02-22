"use client"
// Component for rendering Lottie animations


import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Lottie with SSR disabled to prevent browser-only errors
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface AnimatedLottieProps {
    animationPath?: string;
    className?: string;
}

/**
 * AnimatedLottie Component
 * A wrapper for lottie-react that supports loading animations from a public path.
 * Defaults to '/team04.json' for the Hero section.
 */
export default function AnimatedLottie({ animationPath = '/team04.json', className }: AnimatedLottieProps) {
    const [animationData, setAnimationData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchAnimation = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(animationPath);
                if (!response.ok) throw new Error(`Failed to fetch animation: ${response.statusText}`);
                const data = await response.json();
                if (isMounted) {
                    setAnimationData(data);
                }
            } catch (error) {
                console.error("Error loading Lottie animation:", error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchAnimation();
        return () => { isMounted = false };
    }, [animationPath]);

    if (isLoading || !animationData) {
        return <div className={className} style={{ aspectRatio: '1/1' }} />;
    }

    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}
