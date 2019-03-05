import React from 'react';
import { images } from '../Util/util';

const playerCharacterBoxInfo = (props) => {
    const selectedChar = !props.choosenCharacter ? '' : (
        <div>
            <p>Name: <span>{props.choosenCharacter.name}</span></p>
            <p>Gender: <span>{props.choosenCharacter.gender}</span></p>
            <p>Hair: <span>{props.choosenCharacter.hair}</span></p>
            <p>Eyes: <span>{props.choosenCharacter.eyes}</span></p>
            <p>Mustache: <span>{props.choosenCharacter.mustache ? 'true' : 'false'}</span></p>
            <p>Hat: <span>{props.choosenCharacter.hat ? 'true' : 'false'}</span></p>
            <p>Beard: <span>{props.choosenCharacter.beard ? 'true' : 'false'}</span></p>
            <p>Bald: <span>{props.choosenCharacter.bald ? 'true' : 'false'}</span></p>
            <p>Glasses: <span>{props.choosenCharacter.glasses ? 'true' : 'false'}</span></p>
        </div>
    );
    const characterStyle = {
        backgroundImage: props.choosenCharacter ? `url(${images[props.choosenCharacter.img]})` : 'none',
        backgroundSize: 'cover',
        width: '100px',
        height: '175px',
    }
    return (
        <div className="my-character">
            <div className="selectedChar" style={characterStyle}>
                { !props.choosenCharacter ? <i className="fas fa-question"></i> : null }
            </div>
            <div className="info">{selectedChar}</div>
        </div>
    )
}

export default playerCharacterBoxInfo;