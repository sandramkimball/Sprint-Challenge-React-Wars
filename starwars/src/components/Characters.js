import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';



function Characters(){
    const [charList, setChar] = useState([]);
    const [charPlanet, setPlanet] = useState([]);

    useEffect(()=> {
        axios.get('https://swapi.co/api/people/5')
        .then(response=>{
            const charList = response.data;
            const charPlanet = response.data.homeworld;
            console.log('Characters: ', charList)
            setChar(charList);

            // console.log('Character Planet: ', charPlanet)
            // setPlanet(charPlanet);
        });
    }, []);

    useEffect(()=> {
        axios.get(charPlanet)
        .then(response=>{
            const charPlanet = response.data;
            console.log('Character Planet: ', charPlanet)
            setPlanet(charPlanet);
        });
    }, []);


    return (
        <div className='charList'>
            <h1>Testing Characters</h1>
            <CharacterCards
                name={charList.name}
                homeworld={charPlanet.name}
                birth={charList.birth_year}/>
        </div>
    );
}

export default Characters;
