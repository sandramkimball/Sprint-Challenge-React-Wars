import React from 'react';
import styled from 'styled-components';

const CharProfile = styled.div`
    width: 300px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    margin: 20px; 
    background: rgba(208, 217, 226, 0.8);
`;
const ProfileTitle = styled.h1`
    font-size: 24px;
    padding: 10px;
`;
const ProfileText = styled.p`
    font-size: 12px;
    padding: 10px;
`;
// const ProfilePic = styled.img`
//     width: 100%;
//     height: 40%;
//     object-fit: cover;
// `;

const CharacterCards = props => {
    return(
        <CharProfile key={props.id}>
            <ProfileTitle>{props.name}</ProfileTitle>
            <ProfileText>{props.birth}</ProfileText>
        </CharProfile>
    )
}

export default CharacterCards;