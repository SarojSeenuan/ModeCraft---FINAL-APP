import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/global.css";
import profilePic1 from '../assets/team-member/ken.JPG';
import profilePic2 from '../assets/team-member/haru.jpg';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    { name: 'Saroj Seenuan', title: 'Fullstack Developer', image: profilePic1, quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already." },
    { name: 'ウルジバダラフ ハリウン', title: 'UI/UX Designer', image: profilePic2, quote: "I've been using ModeCraft for a few months now and I'm really impressed with the results. The design is beautiful and the features are easy to use." },
];

function TeamMember({ member }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={ref} className='team-member'>
            <div className='quote-container'>
                <p className='quote'>{member.quote}</p>
                <h2 className='name'>{member.name}</h2>
                <p className='title'>{member.title}</p>
            </div>
            <div className='image-container'>
                <img src={member.image} alt={member.name} />
            </div>
        </div>
    );
}

export default function Testimonial() {
    return (
        <div className='testimonial-wrapper'>
            {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
            ))}
        </div>
    );
}