import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { ChangerStats } from './ChangerStats.js';
import { ChoisirRace } from './ChoisirRace.js';

export function JeuDnD() {
  const [raceChoisie, setMainRace] = useState(null);

  const races = [ {"race" : "Nain", "Force": 3,'Intelligence': -2, 'Dexterite': 0,'Endurance': 2,'Charisme':-3},
                  {"race" : "Humain", "Force": 0,'Intelligence': 0,'Dexterite': 0,'Endurance': 0,'Charisme': 0},
                  {"race" : "Elfe", "Force": -2,'Intelligence': 3, 'Dexterite': 3,'Endurance': -2,'Charisme': 0}];
                  
  
  

  const handleClick = (index) => {
    const nouvelleRace = races[index];
    setMainRace(nouvelleRace);
  };

  var composantAffiche = <ChangerStats race={raceChoisie}/>;
  if (raceChoisie === null) {
    composantAffiche = <ChoisirRace races={races} handleClick={handleClick}/>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            {composantAffiche}
          </Col>
        </Row>
      </Container>
    </>
  );
}