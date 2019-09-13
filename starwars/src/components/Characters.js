import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;


function Characters(){
    const [charProfile, setChar] = useState([]);

    useEffect(()=> {
        axios.get('https://swapi.co/api/people/')
        .then(response=>{
            const charList = response.data.results;
            const charPlanet = response.data.results.homeworld;
            console.log('Characters: ', charList)
            console.log('Homeworlds: ', charPlanet)
            setChar(charList);

        })
        .catch(error => {
            console.log("ERGH!", error);
          });
      }, [])

    return (
        <div>
            <h1>Characters</h1>
            <CardContainer>
                {charProfile.map(item=>{
                    return <CharacterCards
                    key={item}
                    name={item.name}
                    mass={item.mass}
                    height={item.height}
                    birth={item.birth_year}
                    homeplanet={item.homeplanet}/>
                })}
            </CardContainer>
        </div>
    );
}

export default Characters;
