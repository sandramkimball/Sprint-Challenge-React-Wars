import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';
// import findCharPlanet from './Homeworld';


function Characters(){
    const [charProfile, setChar] = useState([]);

    useEffect(()=> {
        axios.get('https://swapi.co/api/people/')
        .then(response=>{
            const charList = response.data.results;
            console.log('Characters: ', charList)
            setChar(charList);

        })
        .catch(error => {
            console.log("ERGH!", error);
          });
      }, [])



    return (
        <div className='charList'>
            <h1>Testing Characters</h1>
            {charProfile.map(item=>{
                return <CharacterCards
                key={item}
                name={charProfile.name}
                birth={charProfile.birth_year}/>
            })}
        </div>
    );
}

export default Characters;
