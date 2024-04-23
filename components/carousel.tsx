'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
    slides: React.ReactNode[];
}

const PageDot: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
    <button onClick={onClick} className={`mx-1 h-3 w-3 rounded-full ${active ? 'bg-blue-500' : 'bg-gray-300'} focus:outline-none`} />
);

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [transition, setTransition] = useState<string>('');
    const [autoplayActive, setAutoplayActive] = useState<boolean>(true);

    const nextSlide = (): void => {
        setTransition('slide-in-right');
        setCurrentIndex((prevIndex: number) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = (): void => {
        setTransition('slide-in-left');
        setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const toggleAutoplay = (): void => {
        setAutoplayActive((prevActive) => !prevActive);
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (autoplayActive) {
            intervalId = setInterval(() => {
                setTransition('slide-in-right');
                setCurrentIndex((prevIndex: number) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
            }, 3000);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [autoplayActive, slides]);

    return (
        <div className="carousel relative h-full overflow-hidden">
            {/*
                <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 transform">
                    Prev
                </button>
            */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide absolute left-0 top-0 ${index === currentIndex ? 'block' : 'hidden'} w-full transition-opacity duration-300`}
                >
                    {slide}
                </div>
            ))}
            {/*
                <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 transform">
                    Next
                </button>
            */}
            <div className="absolute bottom-0 left-1/2 mb-2 flex -translate-x-1/2 transform space-x-2">
                <button onClick={toggleAutoplay} className="">
                    {autoplayActive ? 'Pause' : 'Play'}
                </button>

                {slides.map((_, index) => (
                    <PageDot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
                ))}
            </div>
        </div>
    );
}
