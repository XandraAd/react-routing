
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ServicesData } from '../Data';




const Services = () => {
  return (
    <>
      <h1>Services Page</h1>
      <div>
        {ServicesData.map((service,id) => {
          return (
            <Card key={id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={service.imageUrl} />
              <Card.Body>
                <Card.Title>name: {service.name}</Card.Title>
                <Button variant="light"><Link to={`/service/${service.id}`}>show more</Link></Button>
              </Card.Body>
              
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Services;








