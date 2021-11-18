import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ data }) => {
    let { name, description, price, img } = data
    return (
        <div>
            {/* <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p> */}

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p>{price}</p>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Service;

/*

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

*/