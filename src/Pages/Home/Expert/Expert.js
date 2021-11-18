import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({data}) => {
    let {img, name, expertize} = data
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {expertize}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Expert;