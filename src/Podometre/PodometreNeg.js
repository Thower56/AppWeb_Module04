import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { GroupeButton } from './GroupeButton';

export function PodometreNeg(){
    const [compteur, setCompteur] = useState(0);

    const incrementer = () => setCompteur(compteur < 0 ? compteur + 1 : compteur);
    const decrementer = () => setCompteur(compteur - 1);
    const remiseAZero = () => setCompteur(0);
    return(
        <Container className='border border-dark'>
            <h2>{compteur}</h2>
            <GroupeButton incrementer={incrementer} decrementer={decrementer} remiseAZero={remiseAZero} setCompteur={setCompteur}/>
        </Container>
    );
}