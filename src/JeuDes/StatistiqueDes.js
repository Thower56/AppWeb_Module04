import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Statistique({mainDes}){
    const statistique = [0,0,0,0,0];
    
    mainDes.forEach(value => statistique[value-1]++);
    
    return(
        <>
            <Container>
                <h2>Stats</h2>
                <ul>
                    {statistique.map((value, index) => 
                    <li key={index}>Nombre de {index+1}: {statistique[index]}</li>)}
                </ul>
            </Container>
        </>
    )
}