import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Phone, Droplet } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'why-us', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--primary-green)',
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '1.1',
    textDecoration: 'none'
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{
        backgroundColor: 'var(--white)',
        transition: 'box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        padding: scrolled ? '0.5rem 0' : '1rem 0'
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={logoStyle}>
          <div style={{
            backgroundColor: 'var(--light-green)',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Droplet size={24} color="var(--primary-green)" strokeWidth={2.5} />
          </div>
          <div>
            AWARI<br/>ENTERPRISES
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ gap: '1rem', fontWeight: '500' }}>
            <Nav.Link href="#home" className={`text-dark ${activeSection === 'home' ? 'active-link' : ''}`}>Home</Nav.Link>
            <Nav.Link href="#about" className={`text-dark ${activeSection === 'about' ? 'active-link' : ''}`}>About Us</Nav.Link>
            <Nav.Link href="#services" className={`text-dark ${activeSection === 'services' ? 'active-link' : ''}`}>Services</Nav.Link>
            <Nav.Link href="#why-us" className={`text-dark ${activeSection === 'why-us' ? 'active-link' : ''}`}>Why Us</Nav.Link>
            <Nav.Link href="#contact" className={`text-dark ${activeSection === 'contact' ? 'active-link' : ''}`}>Contact</Nav.Link>
          </Nav>
          <Button 
            href="tel:9623792563"
            className="btn-primary-custom d-flex align-items-center gap-2"
            style={{ backgroundColor: 'var(--accent-orange)', color: 'var(--white)', border: 'none' }}
          >
            <Phone size={18} />
            9623792563
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
