'use client';

import React, { useState, useEffect } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';

interface CarouselProps {
    slides: React.ReactNode[];
}

const PageDot: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
    <button onClick={onClick} className={`h-4 w-4 rounded-full ${active ? 'bg-black' : 'bg-gray-300'}`} />
);

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [transition, setTransition] = useState<string>('');
    const [autoplayActive, setAutoplayActive] = useState<boolean>(true);
    let intervalId: NodeJS.Timeout | null = null;

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

    const handlePageDotClick = (index: number) => {
        setCurrentIndex(index);
        if (autoplayActive) {
            setAutoplayActive(false);
            setTimeout(() => {
                setAutoplayActive(true);
            }, 0);
        }
    };

    return (
        <div className="carousel relative h-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : ''} w-full`}
                >
                    {slide}
                </div>
            ))}
            <div className="absolute bottom-0 left-1/2 mb-2 flex -translate-x-1/2 transform gap-4">
                <button onClick={toggleAutoplay} className="">
                    {autoplayActive ? <FaPause /> : <FaPlay />}
                </button>

                {slides.map((_, index) => (
                    <PageDot key={index} active={index === currentIndex} onClick={() => handlePageDotClick(index)} />
                ))}
            </div>
        </div>
    );
}
