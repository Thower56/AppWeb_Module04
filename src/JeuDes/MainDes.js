import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function MainDes({valeurDes, handleClick}){
    return (
        <>
            <Container>
                {valeurDes.map((value, index) => 
                    <img key={index} 
                        src={`/de${value}.png`} 
                        width={104} 
                        className='p-1'
                        alt={value}
                        onClick={() => handleClick(index)}
                    />
                    )
                }
            </Container>
        </>
    )
}


// {valeurDes.map((valeur, index)=>(
//     <img key={index} 
//         src={`/de${valeur}.png`} 
//         width={104} 
//         className='p-1'alt={valeur} 
//         onClick={()=>handleClick(index)}
//     />
// )
// )}