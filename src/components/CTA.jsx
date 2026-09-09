import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-dark-green text-white text-center">
      <Container>
        <h2 className="display-5 mb-4" style={{ color: 'var(--white)' }}>
          Turn Your Waste Cooking Oil Into Value.
        </h2>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px', opacity: 0.9 }}>
          Partner with Awari Enterprises for reliable collection, best rates and responsible waste oil management.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button 
            href="tel:9623792563"
            className="btn-primary-custom d-flex align-items-center gap-2 px-4 py-3"
            style={{ fontSize: '1.1rem' }}
          >
            <Phone size={20} />
            Call 9623792563
          </Button>
          <Button 
            href="#contact"
            className="btn-outline-custom d-flex align-items-center gap-2 px-4 py-3"
            style={{ 
              borderColor: 'var(--white)', 
              color: 'var(--white)',
              fontSize: '1.1rem'
            }}
          >
            <Mail size={20} />
            Send Enquiry
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
