import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function BrasserMain({handleClick})
{
    return(
        <Container>
            <Row>
                <Col className='col-3'>
                    <h2>Jeu de Des</h2>
                </Col>
                <Col> 
                    <Button variant="warning" className="m-1" onClick={() => handleClick()}>Brasser la main</Button>
                </Col>
            </Row>
        </Container>
    )
}