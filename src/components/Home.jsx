import React, { useState, useRef } from 'react';
import './home.css';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const contactRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Richitha.Ch</h1>
        <nav>
          <ul className="nav-links">
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(ProjectRef)}>Project</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero" ref={homeRef}>
        <h2>React Developer</h2>
        <p>
          Skilled in front-end and back-end technologies, creating innovative web
          solutions with expertise in ReactJS, NodeJS, and modern development practices.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection(ProjectRef)}>View My Work</button>
          <button onClick={() => scrollToSection(contactRef)}>Get In Touch</button>
        </div>
      </section>

      <section className="about" ref={aboutRef}>
        <h2>About Me</h2>
        <p>
          An MCA graduate with a strong foundation in web development and hands-on experience as a React intern. Dedicated to building meaningful and user-centric digital projects.
        </p>
        <p>
          Through my academic projects and internship project, I’ve gained hands-on skills in web development, especially within the React ecosystem. Projects like a Weather Forecast app and a To-Do List have strengthened my front-end development abilities and API integration skills.
        </p>

        <h3>Education</h3>
        <ul>
          <li>MCA - University PG College of Science</li>
          <li>Bachelor's - Wesley Degree College for Women</li>
        </ul>
      </section>

      <section className="skills" ref={skillsRef}>
        <h2>Skills & Tools</h2>
        <div className="skill-list">
          <ul>
            <li><strong>HTML5</strong></li>
            <li><strong>CSS3</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>ReactJS</strong></li>
            <li><strong>NodeJS</strong></li>
            <li><strong>VS Code</strong></li>
            <li><strong>Git & GitHub</strong></li>
          </ul>
        </div>
      </section>

      <section className="Project" ref={ProjectRef}>
        <h2>Project</h2>
        <div className="project">
          <h4>Weather App (CipherByte Technologies)</h4>
          <p>Built with JavaScript, HTML5, CSS3 and Weather API</p>
        </div>
        <div className="project">
          <h4>To-Do List Application (CipherByte Technologies)</h4>
          <p>Built with JavaScript, HTML5, CSS3 and Local Storage</p>
        </div>
        <div className="project">
          <h4>Health is Life Website (Elevate Code Technologies)</h4>
          <p>Built with ReactJS, and responsive design.</p>
          <p>Implemented reusable components and managed state using React Hooks.</p>
          <p>Optimized user interface for mobile and desktop devices to ensure seamless accessibility.</p>
        </div>
      </section>

      <section className="contact" ref={contactRef}>
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities or just having a conversation
          about web development.
        </p>

        <div className="social-icons">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>

        <p><strong>Email:</strong><span> richitha@example.com</span></p>
        <p><strong>Location:</strong> Available for Remote Opportunities</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Richitha.Ch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
