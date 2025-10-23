import React from 'react';
import './Transformations.css';

const transformations = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Lost 25kg in 6 months',
    before: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    after: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    quote: 'LA Fitness changed my life! The trainers are incredibly supportive and the community is amazing.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Gained 8kg of Muscle',
    before: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    after: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    quote: 'The strength training program helped me achieve my dream physique. Highly recommended!'
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Ran First Marathon',
    before: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    after: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    quote: 'From couch to marathon finish line! The training programs are top-notch.'
  }
];

const Transformations: React.FC = () => {
  return (
    <section className="transformations-section" id="transformations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Real people, real results. Be inspired by our members' transformations.</p>
        </div>
        
        <div className="transformations-grid">
          {transformations.map((transformation) => (
            <div className="transformation-card" key={transformation.id}>
              <div className="image-slider">
                <div className="slider-container">
                  <div className="before-after">
                    <div className="before">
                      <img src={transformation.before} alt={`Before: ${transformation.name}`} />
                      <span className="label">Before</span>
                    </div>
                    <div className="after">
                      <img src={transformation.after} alt={`After: ${transformation.name}`} />
                      <span className="label">After</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transformation-content">
                <div className="quote">"{transformation.quote}"</div>
                <div className="member-info">
                  <h3 className="member-name">{transformation.name}</h3>
                  <p className="member-role">{transformation.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <p className="cta-text">Ready to start your transformation?</p>
          <a href="#join-now" className="btn btn-primary">Join Now</a>
        </div>
      </div>
    </section>
  );
};

export default Transformations;