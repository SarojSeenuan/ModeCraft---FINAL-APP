import React, { useState, useEffect, useCallback } from 'react';
import css from '../assets/tech-stack/css.png';
import html from '../assets/tech-stack/html.png';
import js from '../assets/tech-stack/js.png';
import react from '../assets/tech-stack/react.png';
import photoshop from '../assets/tech-stack/photoshop.png';
import figma from '../assets/tech-stack/figma.png';
import illustrator from '../assets/tech-stack/ai.png';
import tailwind from '../assets/tech-stack/tailwind.png';
import github from '../assets/tech-stack/github.png';
import gsap from '../assets/tech-stack/gsap.png';
import threejs from '../assets/tech-stack/threejs.png';

export default function Slider() {
    const [ isLoaded, setIsLoaded ] = useState(false);

    const techStack = [
        { img: html, alt: 'html' },
        { img: css, alt: 'css' },
        { img: js, alt: 'js' },
        { img: react, alt: 'react' },
        { img: figma, alt: 'figma' },
        { img: photoshop, alt: 'photoshop' },
        { img: illustrator, alt: 'illustrator' },
        { img: tailwind, alt: 'tailwind' },
        { img: github, alt: 'github' },
        { img: gsap, alt: 'gsap' },
        { img: photoshop, alt: 'photoshop' },
        { img: illustrator, alt: 'illustrator' },
        { img: tailwind, alt: 'tailwind' },

    ];

    const renderText = () => (
        <>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Figma</span>
                <span>Git</span>
                <span>Tailwind</span>
                <span>Illustrator</span>
                <span>Photoshop</span>
                <span>GSAP</span>
                <span>Three.js</span>
                <span>React</span>
                <span>Tailwind</span>
            </div>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Figma</span>
                <span>Git</span>
                <span>Tailwind</span>
                <span>Illustrator</span>
                <span>Photoshop</span>
                <span>GSAP</span>
                <span>Three.js</span>
                <span>React</span>
                <span>Tailwind</span>
            </div>
        </>
    );

    const renderImages = () => (
        <>
            <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                {techStack.map((item, index) => (
                    <img
                        key={`${item.alt}-${index}`}
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                    />
                ))}
            </div>
            <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                {techStack.map((item, index) => (
                    <img
                        key={`${item.alt}-${index}-clone`}
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                    />
                ))}
            </div>
        </>
    );

    return (
        <div className="slider-container">
            <div className="slider" style={{ '--time': '25s' }}>
                {renderText()}
            </div>
            <div className="slider imgBox" style={{ '--time': '30s' }}>
                {renderImages()}
            </div>
            <div className="slider" style={{ '--time': '35s' }}>
                {renderText()}
            </div>
        </div>
    );
}