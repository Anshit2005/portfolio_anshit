import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="src/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="src/assets/about-pic.png" alt="about-me-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a B.Tech Computer Science and Engineering student at the
              Indian Institute of Technology Jodhpur, with a strong interest in
              Software Development and a growing passion for Artificial
              Intelligence and Machine Learning. I'm always eager to learn new
              technologies, build real-world projects, and deepen my
              understanding of how software can solve meaningful problems.
            </p>
            <p>
              I’ve completed relevant courses like Data Structures and
              Algorithms, Software Engineering, Machine Learning, Signals and
              Systems, and Quantum Information, which have built a strong
              foundation in core CS concepts. My technical skills include C/C++,
              Python, JavaScript, and SQL, with experience in tools like Git, VS
              Code, Arduino IDE, and platforms like Firebase and Vercel. I’m
              proficient in frameworks and libraries such as React, Tailwind
              CSS, Express.js, TensorFlow, OpenCV, and Qiskit, with hands-on
              exposure to full stack development and AI/ML projects.
            </p>
          </div>
          <div className="about-skills-grid">
            <div className="card">
              <img src="src/assets/skills/python_logo.svg" alt="Python logo" />
              <span>Python</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/javascript_logo.svg"
                alt="JavaScript logo"
              />
              <span>JavaScript</span>
            </div>
            <div className="card">
              <img src="src/assets/skills/react-js-icon.svg" alt="React logo" />
              <span>React</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/google-tensorflow-icon.svg"
                alt="TensorFlow logo"
              />
              <span>TensorFlow</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/c-plus-plus-programming-language-icon.svg"
                alt="C/C++ logo"
              />
              <span>C/C++</span>
            </div>
            <div className="card">
              <img src="src/assets/skills/mysql-icon.svg" alt="MySQL logo" />
              <span>MySQL</span>
            </div>
            <div className="card">
              <img src="src/assets/skills/git-icon.svg" alt="Git logo" />
              <span>Git</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/node-js-icon.svg"
                alt="Node.js logo"
              />
              <span>Node.js</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/google-firebase-icon.svg"
                alt="Firebase logo"
              />
              <span>Firebase</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/tailwind-css-icon.svg"
                alt="Tailwind CSS logo"
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="card">
              <img
                src="src/assets/skills/visual-studio-code-icon.svg"
                alt="VS Code logo"
              />
              <span>VS Code</span>
            </div>
            <div className="card">
              <img src="src/assets/skills/figma-icon.svg" alt="Figma logo" />
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
