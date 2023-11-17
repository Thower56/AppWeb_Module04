import React from 'react';
import { useState } from 'react';
import {MainDes} from './JeuDes/MainDes.js';
import Button from 'react-bootstrap/Button';
import { JeuDnD } from './JeuDnd/JeuDnD.js';
import { Statistique } from './JeuDes/StatistiqueDes.js';
import { TotalStats } from './JeuDes/TotalStats.js';
import { BrasserMain } from './BrasserMain.js';
import { PodometreNeg } from './Podometre/PodometreNeg.js';
import { brasserMainAleatoire } from './brasserMainAleatoire.js';
import { genererNombreAleatoire } from './genererNombreAleatoire.js';

export function App() {
    const [mainDes, setMainDes] = useState(brasserMainAleatoire(1,6));

    

    const handleClick = (index) =>{
        const nouvelleValeur = genererNombreAleatoire(1, 6);
        const nouvelleMain = mainDes.slice();
        nouvelleMain[index] = nouvelleValeur;

        setMainDes(nouvelleMain);
    }

    
    return (
    <>
        <JeuDnD />
        <BrasserMain handleClick={() => setMainDes(brasserMainAleatoire(1,6))}/>
        <MainDes valeurDes={mainDes} handleClick={handleClick}/>
        <TotalStats mainDes={mainDes}/>
        <Statistique mainDes={mainDes}/>
        <PodometreNeg/>
    </>
    );
}

