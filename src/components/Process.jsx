import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PhoneCall, BadgeIndianRupee, CalendarCheck, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      desc: 'Tell us about your waste cooking oil collection requirements.',
      icon: <PhoneCall size={24} />
    },
    {
      num: '02',
      title: 'Get Best Rates',
      desc: 'Receive competitive and transparent pricing.',
      icon: <BadgeIndianRupee size={24} />
    },
    {
      num: '03',
      title: 'Schedule Pickup',
      desc: 'Choose a convenient collection schedule.',
      icon: <CalendarCheck size={24} />
    },
    {
      num: '04',
      title: 'We Collect',
      desc: 'Our team collects the waste cooking oil safely and responsibly.',
      icon: <Truck size={24} />
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <div className="section-kicker">
            How It Works
          </div>
          <h2 className="display-6">Simple. Safe. Reliable.</h2>
        </div>

        <Row className="g-4 mt-4 position-relative">
          {/* Horizontal line for desktop connecting the steps */}
          <div className="d-none d-lg-block" style={{
            position: 'absolute',
            top: '45px',
            left: '10%',
            right: '10%',
            height: '2px',
            backgroundColor: 'var(--light-green)',
            zIndex: 1
          }}></div>

          {steps.map((step, idx) => (
            <Col lg={3} md={6} key={idx} className="position-relative z-index-2" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="text-center">
                <div style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'var(--white)',
                  border: '2px dashed var(--primary-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--primary-green)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: 'var(--light-green)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {step.icon}
                  </div>
                </div>
                
                <h5 style={{ fontWeight: '700', color: 'var(--dark-green)' }}>
                  {step.num} &mdash; {step.title}
                </h5>
                <p className="text-muted mb-0 mt-2 px-xl-3">
                  {step.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Process;
