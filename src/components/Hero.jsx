import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { IndianRupee, Clock, ShieldCheck, Leaf } from 'lucide-react';
import heroBg from '../assets/pouring_cooking_oil.jpg';

const Hero = () => {
  const highlights = [
    {
      title: 'BEST RATES',
      desc: 'Competitive & Transparent Pricing',
      icon: <IndianRupee size={32} className="text-primary-green mb-3" />
    },
    {
      title: 'ON-TIME PICKUP',
      desc: 'Reliable Collection Service',
      icon: <Clock size={32} className="text-primary-green mb-3" />
    },
    {
      title: 'SAFE & HYGIENIC',
      desc: 'Clean, Secure & Spill-Free Collection',
      icon: <ShieldCheck size={32} className="text-primary-green mb-3" />
    },
    {
      title: 'ECO-FRIENDLY DISPOSAL',
      desc: 'Contributing to a Greener Tomorrow',
      icon: <Leaf size={32} className="text-primary-green mb-3" />
    }
  ];

  return (
    <section id="home" style={{ paddingTop: '80px' }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 0
          }}
        ></div>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(18, 61, 41, 0.8)',
          zIndex: 1
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2 }} className="fade-in">
          <Row>
            <Col lg={8}>
              <div className="section-kicker mb-3">
                Responsible Collection. Greener Tomorrow.
              </div>
              <h1 className="display-3 mb-4" style={{ color: 'var(--white)' }}>
                Turn Your Waste Cooking Oil Into Value.
              </h1>
              <p className="lead mb-5" style={{ color: 'var(--white)', opacity: 0.9, maxWidth: '600px' }}>
                Professional waste cooking oil collection for hotels, restaurants and food manufacturers. 
                Best rates, reliable pickup and responsible disposal.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Button href="#contact" className="btn-primary-custom" style={{ 
                  backgroundColor: 'var(--accent-orange)', 
                  color: 'var(--dark-green)' 
                }}>
                  Get Best Rates
                </Button>
                <Button href="#about" className="btn-outline-custom" style={{
                  color: 'var(--white)',
                  borderColor: 'var(--white)'
                }}>
                  Learn More
                </Button>
              </div>

              <div className="d-flex flex-wrap gap-3" style={{ color: 'var(--white)', fontSize: '0.9rem', opacity: 0.9 }}>
                <span className="d-flex align-items-center gap-1">✓ Best Rates</span>
                <span className="d-flex align-items-center gap-1">✓ On-Time Pickup</span>
                <span className="d-flex align-items-center gap-1">✓ Safe & Hygienic</span>
                <span className="d-flex align-items-center gap-1">✓ Eco-Friendly Disposal</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Highlights Section */}
      <Container style={{ marginTop: '-50px', position: 'relative', zIndex: 3 }}>
        <Row className="g-4">
          {highlights.map((item, idx) => (
            <Col lg={3} md={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 border-0 shadow-subtle hover-lift" style={{ borderRadius: '8px' }}>
                <Card.Body className="p-4 text-center">
                  {item.icon}
                  <h5 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--dark-green)' }}>
                    {item.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                  <div style={{
                    width: '30px',
                    height: '3px',
                    backgroundColor: 'var(--accent-orange)',
                    margin: '1rem auto 0',
                    borderRadius: '2px'
                  }}></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
