import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircle2 } from 'lucide-react';
import greenOilTruck from '../assets/green_oil_truck.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} data-aos="fade-right" className="d-none d-lg-block">
            <div style={{ position: 'relative' }}>
              <img 
                src={greenOilTruck} 
                alt="Awari Enterprises Green Collection Truck" 
                className="img-fluid rounded shadow-lg"
                style={{ width: '100%', objectFit: 'cover', height: '550px' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                backgroundColor: 'var(--light-green)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                maxWidth: '250px'
              }} className="d-none d-md-block">
                <h4 style={{ color: 'var(--primary-green)', fontWeight: '700', marginBottom: 0 }}>
                  A Better Tomorrow.
                </h4>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="section-kicker">
              About Awari Enterprises
            </div>
            <h2 className="display-5 mb-4">Your Waste. Our Responsibility.</h2>
            
            <p className="lead mb-3" style={{ color: 'var(--muted-text)' }}>
              Awari Enterprises is your trusted partner for hassle-free waste cooking oil collection with professional service and best rates.
            </p>
            <p className="mb-4" style={{ color: 'var(--muted-text)' }}>
              We help hotels, restaurants and food manufacturers responsibly manage their waste cooking oil through safe, reliable and eco-friendly collection services.
            </p>

            <div className="mb-4">
              <div className="d-flex mb-3">
                <CheckCircle2 size={24} className="text-primary-green me-3 flex-shrink-0" />
                <div>
                  <h5 className="mb-1" style={{ fontWeight: '600' }}>Professional Service</h5>
                  <p className="text-muted mb-0">Reliable and organized waste oil collection.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <CheckCircle2 size={24} className="text-primary-green me-3 flex-shrink-0" />
                <div>
                  <h5 className="mb-1" style={{ fontWeight: '600' }}>Best Rates</h5>
                  <p className="text-muted mb-0">Competitive and transparent pricing.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <CheckCircle2 size={24} className="text-primary-green me-3 flex-shrink-0" />
                <div>
                  <h5 className="mb-1" style={{ fontWeight: '600' }}>Responsible Disposal</h5>
                  <p className="text-muted mb-0">Helping turn waste into a more sustainable resource.</p>
                </div>
              </div>
            </div>

            <Button href="#contact" className="btn-primary-custom mt-2">
              Know More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
