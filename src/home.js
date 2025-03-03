import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you will create a CSS file for styling

const Home = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1>College of Digital Excellence</h1>
                        <p>Empowering the next generation of digital leaders</p>
                    </div>
                    <div className="header-buttons">
                        <Link to="/login" className="btn">Sign In</Link>
                        <Link to="/signup" className="btn">Sign Up</Link>
                    </div>
                </div>
            </header>
            <section className="about">
                <h2>About Us</h2>
                <p>
                    The College of Digital Excellence is dedicated to providing top-notch education in digital technologies. Our programs are designed to equip students with the skills and knowledge needed to excel in the digital world.
                </p>
            </section>
            <section className="programs">
                <h2>Our Programs</h2>
                <ul>
                    <li>Computer Science</li>
                    <li>Software Engineering</li>
                    <li>Data Science</li>
                    <li>Cybersecurity</li>
                </ul>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Email: info@digitalexcellence.edu</p>
                <p>Phone: (123) 456-7890</p>
            </section>
        </div>
    );
};

export default Home;