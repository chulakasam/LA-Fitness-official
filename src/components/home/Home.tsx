import React from 'react';
import './Home.css';
import backgroundImage from '../../assets/la-fitness-bg.jpg';

const Home: React.FC = () => {
    return (
        <section
            className="home"
            id="home"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="overlay">
                <div className="content">
                    <h1 className="title">Transform Your Body, Transform Your Life</h1>
                    <p className="subtitle">
                        Join LA Fitness today and start your fitness journey with expert trainers and Top-class facilities.
                    </p>
                    <div className="buttons">
                        <a href="#join" className="btn btn-primary">
                            Join Now
                        </a>
                        <a href="#learn" className="btn btn-outline">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
