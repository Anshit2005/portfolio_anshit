import React from 'react'
import './Hero.css'

const Hero = () => {
return (
    <div id='home' className='hero'>
        <img src="src\assets\profile-pic2.png" alt="profile pic" />
        <h1><span>I'm Anshit Agarwal,</span> a Software Development Enthusiast from India</h1>
        <p>B.Tech Computer Science and Engineering student at the Indian Institute of Technology Jodhpur, with a strong interest in Full Stack Development and Artificial Intelligence/Machine Learning.</p>
        <div className="hero-action">
            <a href="https://github.com/Anshit2005" target="_blank" rel="noopener noreferrer" className="hero-github">My Github</a>
            <a href="https://drive.google.com/file/d/16PbErlaJROFO_U34vIRlEhREcUIrz303/view" target="_blank" rel="noopener noreferrer" className="hero-resume">My resume</a>
        </div>
    </div>
)
}

export default Hero
