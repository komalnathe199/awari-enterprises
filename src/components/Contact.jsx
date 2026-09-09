import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const OWNER_WHATSAPP = "919623792563"; // Placeholder owner whatsapp - using the provided number for now

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message
    const message = `🌱 New Enquiry - Awari Enterprises
👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
🏢 Company: ${formData.company}
💬 Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    
    // Optional: reset form
    // setFormData({fullName: '', phone: '', email: '', company: '', message: ''});
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Let's Work Together for a Greener Tomorrow.</h2>
        </div>

        <Row className="g-5">
          <Col lg={4} data-aos="fade-right">
            <div className="p-4 rounded shadow-sm bg-light-green h-100">
              <h4 className="mb-4 text-dark-green" style={{ fontWeight: '700' }}>Contact Information</h4>
              
              <div className="d-flex mb-4">
                <div className="bg-white p-2 rounded shadow-sm me-3">
                  <Phone className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h6 className="mb-1 text-muted">CALL US</h6>
                  <a href="tel:9623792563" className="text-dark fw-bold text-decoration-none" style={{ fontSize: '1rem' }}>
                    9623792563
                  </a>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="bg-white p-2 rounded shadow-sm me-3">
                  <Mail className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h6 className="mb-1 text-muted">EMAIL US</h6>
                  <a href="mailto:awarienterprises07@gmail.com" className="text-dark fw-bold text-decoration-none" style={{ fontSize: '1rem' }}>
                    awarienterprises07@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="bg-white p-2 rounded shadow-sm me-3">
                  <MapPin className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h6 className="mb-1 text-muted">SERVICE AREA</h6>
                  <span className="text-dark fw-bold" style={{ fontSize: '1rem' }}>
                    Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={8} data-aos="fade-left">
            <div className="p-4 p-md-5 rounded shadow-sm border h-100">
              {submitted && (
                <Alert variant="success" className="mb-4">
                  Your enquiry is ready in WhatsApp. Please press Send to submit it.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required 
                        placeholder="John Doe"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        placeholder="+91 9876543210"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Business / Company Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required 
                        placeholder="ABC Hotel"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        placeholder="We want regular waste cooking oil collection..."
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12}>
                    <Button type="submit" className="btn-primary-custom w-100 py-3 text-uppercase fw-bold">
                      Send Enquiry
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
