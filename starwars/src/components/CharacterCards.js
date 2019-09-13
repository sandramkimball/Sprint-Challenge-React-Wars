import React from 'react';
import styled from 'styled-components';

const CharProfile = styled.div`
    width: 300px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    margin: 20px; 
    background: rgba(208, 217, 226, 0.8);
    :hover{
        transform: scale(1.2);
    }
`;
const ProfileTitle = styled.h2`
    font-size: 24px;
    padding-top: 5px;
`;
const ProfileText = styled.p`
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
    line-height: .2;
`;

const CharacterCards = props => {
    return(
        <CharProfile key={props.id}>
            <ProfileTitle>{props.name}</ProfileTitle>
            <ProfileText>Mass: {props.mass}</ProfileText>
            <ProfileText>Height: {props.height}</ProfileText>
            <ProfileText>Birth Year:{props.birth}</ProfileText>
        </CharProfile>
    )
}

export default CharacterCards;