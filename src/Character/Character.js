import React from 'react';
import { images } from '../Util/util';

const character = (props) => {
    const characterStyle = {
        backgroundImage: `url(${images[props.character.img]})`,
        backgroundSize: 'cover',
    }
    
    return (
        <div className="Character"
             style={characterStyle}
             onClick={() => !props.freeze ? props.choose(props.character) : null}>
            <span>{props.character.name}</span>
        </div>
    )
}

export default character;