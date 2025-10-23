import React from 'react';
import './Team.css';

const trainers = [
  {
    id: 1,
    name: 'Michael Johnson',
    role: 'Head Trainer & Nutritionist',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Certified personal trainer with 10+ years of experience in strength training and sports nutrition.',
    specialties: ['Strength Training', 'Weight Loss', 'Sports Nutrition'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Yoga & Pilates Expert',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80',
    bio: 'E-RYT 500 certified yoga instructor specializing in vinyasa flow and therapeutic yoga practices.',
    specialties: ['Vinyasa Yoga', 'Pilates', 'Mindfulness'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'HIIT & Functional Training',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Specialist in high-intensity interval training and functional movement patterns for all fitness levels.',
    specialties: ['HIIT', 'Functional Training', 'Mobility'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Team: React.FC = () => {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Expert Trainers</h2>
          <p className="section-subtitle">Our certified professionals are here to guide you on your fitness journey</p>
        </div>
        
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div className="trainer-card" key={trainer.id}>
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
                <div className="social-links">
                  <a href={trainer.social.instagram} className="social-link" aria-label={`${trainer.name} on Instagram`}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={trainer.social.twitter} className="social-link" aria-label={`${trainer.name} on Twitter`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={trainer.social.linkedin} className="social-link" aria-label={`${trainer.name} on LinkedIn`}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
                <p className="trainer-bio">{trainer.bio}</p>
                <div className="specialties">
                  {trainer.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
                <a href="#contact" className="btn btn-outline">Book Session</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <p className="cta-text">Ready to start training with our experts?</p>
          <a href="#contact" className="btn btn-primary">Get Started Today</a>
        </div>
      </div>
    </section>
  );
};

export default Team;