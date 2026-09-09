import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Factory, CalendarClock, ShieldAlert } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Waste Cooking Oil Collection',
      desc: 'Collecting used cooking oil from hotels, restaurants, food manufacturers, and commercial kitchens.',
      icon: <Factory size={40} className="text-primary-green mb-4" />
    },
    {
      id: '02',
      title: 'Scheduled Pickup',
      desc: 'Reliable and convenient collection schedules designed around your business requirements.',
      icon: <CalendarClock size={40} className="text-primary-green mb-4" />
    },
    {
      id: '03',
      title: 'Safe & Responsible Handling',
      desc: 'Clean, secure and spill-free collection with environmentally responsible disposal practices.',
      icon: <ShieldAlert size={40} className="text-primary-green mb-4" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-light-green">
      <Container>
        <div className="text-center mb-5">
          <div className="section-kicker">
            Our Services
          </div>
          <h2 className="display-6">Complete Waste Cooking Oil Collection Solutions</h2>
        </div>

        <Row className="g-4 mt-2">
          {services.map((svc, idx) => (
            <Col lg={4} md={6} key={svc.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 border-0 shadow-subtle hover-lift" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <Card.Body className="p-5">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    {svc.icon}
                    <span style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '700', 
                      color: 'var(--light-green)',
                      WebkitTextStroke: '1px var(--primary-green)',
                      color: 'transparent'
                    }}>
                      SERVICE {svc.id}
                    </span>
                  </div>
                  <h4 style={{ color: 'var(--dark-green)', fontWeight: '700' }} className="mb-3">
                    {svc.title}
                  </h4>
                  <p className="text-muted mb-0">
                    {svc.desc}
                  </p>
                </Card.Body>
                <div style={{
                  height: '4px',
                  width: '100%',
                  backgroundColor: 'var(--accent-orange)'
                }}></div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
