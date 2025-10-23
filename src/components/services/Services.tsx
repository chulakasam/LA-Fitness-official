import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Personal Training',
    description: 'Get personalized workout plans and one-on-one coaching from our certified trainers to achieve your fitness goals faster.',
    icon: '💪',
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'Group Classes',
    description: 'Join our high-energy group fitness classes including HIIT, Zumba, Yoga, and more to stay motivated and have fun while working out.',
    icon: '👥',
    color: '#4ECDC4'
  },
  {
    id: 3,
    title: 'Nutrition Planning',
    description: 'Customized meal plans and nutritional guidance to complement your fitness journey and optimize your results.',
    icon: '🥗',
    color: '#45B7D1'
  },
  {
    id: 4,
    title: 'Cardio Zone',
    description: 'State-of-the-art cardio equipment including treadmills, ellipticals, and bikes with personalized workout tracking.',
    icon: '🏃‍♂️',
    color: '#96CEB4'
  },
  {
    id: 5,
    title: 'Strength Training',
    description: 'Comprehensive weight training area with free weights, machines, and expert guidance for all fitness levels.',
    icon: '🏋️',
    color: '#FFEEAD'
  },
  {
    id: 6,
    title: 'Recovery',
    description: 'Specialized recovery services including massage therapy, cryotherapy, and stretching to help your body recover and perform better.',
    icon: '🧘',
    color: '#D4A5A5'
  }
];

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Discover our comprehensive range of fitness services designed to help you achieve your goals</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div 
                className="service-icon" 
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                <span className="icon">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#learn-more" className="service-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
