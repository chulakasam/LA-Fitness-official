import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>LA FITNESS</h3>
            <p>Your journey to a healthier lifestyle starts here.</p>
            {/*<div className="social-links">*/}
            {/*  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">*/}
            {/*    <i className="fab fa-facebook-f"></i>*/}
            {/*  </a>*/}
            {/*  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">*/}
            {/*    <i className="fab fa-twitter"></i>*/}
            {/*  </a>*/}
            {/*  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">*/}
            {/*    <i className="fab fa-instagram"></i>*/}
            {/*  </a>*/}
            {/*  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">*/}
            {/*    <i className="fab fa-youtube"></i>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#transformations">Transformations</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Cardio Training</li>
              <li>Strength Training</li>
              <li>Yoga & Pilates</li>
              <li>Nutrition Plans</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Fitness Street, New York, NY 10001</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@lafitness.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p>Sat - Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} LA Fitness. All Rights Reserved.Developed by CodeWave</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;