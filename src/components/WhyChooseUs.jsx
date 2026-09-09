import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircle2 } from 'lucide-react';
import professionalOilCollection from '../assets/professional_oil_collection.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Competitive Pricing',
      desc: 'Get value from your waste. We offer the best market rates for used cooking oil.'
    },
    {
      title: 'Hassle-Free Scheduling',
      desc: 'We work around your schedule. Flexible pickup options that never disrupt your business.'
    },
    {
      title: 'Regulatory Compliance',
      desc: 'We provide necessary documentation and certificates to ensure your business remains compliant.'
    },
    {
      title: 'Environmental Impact',
      desc: 'Partner with us to reduce your carbon footprint. Every drop we collect is repurposed sustainably.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-light-green">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5} className="order-lg-2" data-aos="fade-left">
            <div style={{ position: 'relative' }}>
              <img 
                src={professionalOilCollection} 
                alt="Professional waste cooking oil collection barrels" 
                className="img-fluid rounded shadow-lg"
                style={{ width: '100%', objectFit: 'cover', height: '550px' }}
              />
            </div>
          </Col>
          <Col lg={7} className="order-lg-1" data-aos="fade-right">
            <div className="section-kicker">
              Why Choose Awari Enterprises
            </div>
            <h2 className="display-5 mb-5">Best Rates. Best Services. Better Tomorrow.</h2>
            
            <div className="d-flex flex-column gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="d-flex align-items-start hover-lift p-3 rounded" style={{ backgroundColor: 'var(--white)' }}>
                  <CheckCircle2 size={28} className="text-primary-green me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="mb-1" style={{ fontWeight: '700', color: 'var(--dark-green)' }}>
                      {reason.title}
                    </h5>
                    <p className="text-muted mb-0">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
