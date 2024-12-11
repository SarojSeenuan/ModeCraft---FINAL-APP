import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImg from '../assets/bg.jpeg';
import Slider from '../components/Slider';
import Testimonial from '../components/Testimonial';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    const aboutref = useRef(null);

    useEffect(() => {
        gsap.fromTo(aboutref.current,
            { opacity: 0, y: 70 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutref.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return <>
        <section
            className="content-section"
            id="overview-section"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/* TODO: ホームページのメインビジュアルを作成 
            */}

        </section>

        {/* about section */}

        <section ref={aboutref} className="content-section" id="about-section">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </section>

        {/* tech-stack banner section */}
        <section className="content-section" id="tech-stack-section">
            <h2>TECH STACK</h2>
            {/* TODO: 技術スタックのバナーをSlideShowで作成 */}
            <Slider />
        </section>

        {/* team section */}
        <section className="content-section" id="team-section">
            <h2>MEET THE TEAM</h2>
            {/* TODO: チームメンバーの写真と名前をSlideShowで表示 */}
            <Testimonial />
        </section>
    </>
}