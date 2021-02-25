import React from 'react'
import styled from 'styled-components'


const PotLuckCard = ({potlucks}) =>{

    return(
        <PotCardDiv>
            <h3>Potluck Name:<br></br>{potlucks.potluck_name}</h3>
            <h3>Date:{potlucks.date}</h3>
            <h3>Location:{potlucks.location}</h3>
            <h3>Starting Time:{potlucks.time}</h3>
        </PotCardDiv>
    )
}

export const PotCardDiv = styled.div 
`
display:column;
justify-content:center;
align-items:center;
border: solid black 2px;
border-radius:15px;
width:95%;
margin: 7%;
font-size: 1.2rem;
background:#1e3d59;


h3{
    margin: 1%;
}
`
export default PotLuckCard;