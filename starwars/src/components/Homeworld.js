import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './Characters';

let charPlanet = <Characters {response.data.homeworld}/>;

function findCharPlanet(){
const [charPlanet, setPlanet] = useState([]);


useEffect(()=> {
    axios.get(charPlanet)
    .then(response=>{
        const charPlanet = response.data;
        console.log('Character Planet: ', charPlanet)
        setPlanet(charPlanet);
    });
}, []);
}

export default findCharPlanet;