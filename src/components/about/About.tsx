import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About LA Fitness</h2>
            <p className="highlight-text">
              Your journey to a healthier lifestyle starts here at LA Fitness, where fitness meets community.
            </p>
            <p>
              Founded with a vision to transform lives through fitness, LA Fitness has been a trusted name in the industry for over 3 years.
              Our state-of-the-art facilities and expert trainers are dedicated to helping you achieve your fitness goals.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Fitness Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Members Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certified Trainers</span>
              </div>
            </div>
            <a href="#membership" className="btn btn-primary">Join Our Community</a>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" 
                alt="Fitness training at LA Fitness"
                className="main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;