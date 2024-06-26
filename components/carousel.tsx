'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';

interface CarouselProps {
    slides: React.ReactNode[];
}

const PageDot: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
    <button
        onClick={onClick}
        aria-label="jump to slide"
        className={`h-4 w-4 rounded-full border border-white hover:bg-gray-600 ${active ? 'bg-gray-500' : 'bg-gray-300'}`}
    />
);

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [autoplayActive, setAutoplayActive] = useState<boolean>(true);
    const intervalIdRef = useRef<any>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, [slides]);

    const toggleAutoplay = useCallback(() => {
        setAutoplayActive((prevActive) => !prevActive);
    }, []);

    const handlePageDotClick = useCallback(
        (index: number) => {
            setCurrentIndex(index);
            if (autoplayActive) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = setInterval(nextSlide, 3000);
            }
        },
        [autoplayActive, nextSlide],
    );

    useEffect(() => {
        if (autoplayActive) {
            intervalIdRef.current = setInterval(nextSlide, 3000);
        } else {
            if (intervalIdRef.current) clearInterval(intervalIdRef.current);
        }
        return () => {
            if (intervalIdRef.current) clearInterval(intervalIdRef.current);
        };
    }, [autoplayActive, nextSlide]);

    return (
        <div className="carousel relative h-full min-h-64 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : ''} w-full`}
                >
                    {slide}
                </div>
            ))}
            <div className="absolute bottom-0 w-full transform justify-center bg-gradient-to-t from-white dark:from-gray-800">
                <div className="flex justify-center gap-4">
                    <button onClick={toggleAutoplay}>{autoplayActive ? <FaPause aria-label="Pause" /> : <FaPlay aria-label="Play" />}</button>

                    {slides.map((_, index) => (
                        <PageDot key={index} active={index === currentIndex} onClick={() => handlePageDotClick(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
}
