import React from "react";
import Table from 'react-bootstrap/Table';

export function ChoisirRace({races, handleClick}) {
  
    return (
      <>
        <h1>Choisir votre race</h1>
        <p>Cliquez sur l'image</p>
        <Table bordered size="sm" >
          <thead>
            <tr>
              <td align="center">Nain</td>
              <td align="center">Humain</td>
              <td align="center">Elfe</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {races.map((race, index) =>
                  <td key={index} align='center'>
                      <img 
                      height={200}
                      width={150}
                      src={`${race.race}.jpg`}
                      alt={`${race.race}`}
                      onClick={() => {handleClick(index)}}
                      />
                  </td>)
              }
            </tr>
          </tbody>
        </Table>
      </>
    );
  }


