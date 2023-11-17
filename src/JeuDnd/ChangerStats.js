import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { genererStats } from './genererStats.js';

export function ChangerStats({race}) {
  const [stats, setStats] = useState(genererStats({race}));
  const [pointStats, setPointStats] = useState(5)

  const incrementer = (stat) =>
  {
    const nouvelleStats = Object.assign({}, stats);
    nouvelleStats[stat] = nouvelleStats[stat] > 0 && nouvelleStats[stat] < 18 && pointStats > 0 ? nouvelleStats[stat] + 1 : nouvelleStats[stat];
    const letPoint = pointStats > 0 && nouvelleStats[stat] < 18 ? pointStats - 1 : pointStats
    setPointStats(letPoint);
    setStats(nouvelleStats);
    console.log(stats);
  }

    return (
      <>
        <h1>Valider le profil</h1>
        <h3>Points à assigner: {pointStats}</h3>
        <ul>
          {Object.keys(stats).map((stat, index) => 
            <li key={index}>{stat}: {stats[stat]} / 18
            <Button onClick={() => incrementer(stat)} variant="warning" size="sm" className="m-1">incr</Button>
            </li>
            )}
        </ul>
      </>
    );
  }

 