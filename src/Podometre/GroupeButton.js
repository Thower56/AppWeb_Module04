import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


export function GroupeButton({incrementer, decrementer, remiseAZero}){
    return (
        <>
          <Button variant="primary" onClick={incrementer}>Incrementer</Button>
          <Button variant="success" onClick={decrementer}>Decrementer</Button>
          <Button variant="warning" onClick={remiseAZero}>Remise a zero</Button>
        </>);
}