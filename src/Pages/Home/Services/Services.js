import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../service/Service';

const Services = () => {

    let [service, setService] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(req => req.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
                    {
                        service.map(el => <Service key={el.id} data={el} />)
                    }
            </Row>
        </div >
    );
};

export default Services;

/*

<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

*/