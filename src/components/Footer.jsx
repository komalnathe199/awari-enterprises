import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Droplet } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white pt-5 pb-4">
      <Container>
        <Row className="g-4 mb-4">
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <Droplet size={24} color="var(--accent-orange)" strokeWidth={2.5} />
              <h5 style={{ fontWeight: '700', marginBottom: 0, color: 'var(--accent-orange)' }}>AWARI ENTERPRISES</h5>
            </div>
            <p style={{ color: 'var(--accent-orange)', fontWeight: '600', fontSize: '0.9rem' }}>
              Responsible Collection. Greener Tomorrow.
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', maxWidth: '300px' }}>
              Professional waste cooking oil collection services for hotels, restaurants and food manufacturers.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://instagram.com/awarienterprises" target="_blank" rel="noreferrer" className="text-white hover-lift social-icon">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover-lift social-icon">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover-lift social-icon">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover-lift social-icon">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={4}>
            <h5 className="mb-3" style={{ fontWeight: '700', color: 'var(--accent-orange)' }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              <li><a href="#home" className="text-white text-decoration-none hover-lift d-inline-block">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none hover-lift d-inline-block">About Us</a></li>
              <li><a href="#services" className="text-white text-decoration-none hover-lift d-inline-block">Services</a></li>
              <li><a href="#why-us" className="text-white text-decoration-none hover-lift d-inline-block">Why Us</a></li>
              <li><a href="#contact" className="text-white text-decoration-none hover-lift d-inline-block">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={4}>
            <h5 className="mb-3" style={{ fontWeight: '700', color: 'var(--accent-orange)' }}>Services</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              <li>Waste Cooking Oil Collection</li>
              <li>Scheduled Pickup</li>
              <li>Safe & Hygienic Collection</li>
              <li>Eco-Friendly Disposal</li>
            </ul>
          </Col>
          
          <Col lg={3} md={4}>
            <h5 className="mb-3" style={{ fontWeight: '700', color: 'var(--accent-orange)' }}>Contact</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              <li>9623792563</li>
              <li>awarienterprises07@gmail.com</li>
              <li>Maharashtra, India</li>
            </ul>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          <p className="mb-2 mb-md-0">
            &copy; 2026 Awari Enterprises. All rights reserved.
          </p>
          <p className="mb-0">
            Your Waste. Our Responsibility. A Better Tomorrow.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
