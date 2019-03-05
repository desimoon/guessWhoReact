import React from 'react';
import { images } from '../Util/util';

const computerCharacterBoxInfo = (props) => {
    
    const characterStyle = {
        backgroundImage: `url(${images[props.characterSelected.img]})`,
        backgroundSize: 'cover',
        width: '100px',
        height: '175px',
    }
    const reveal = props.revealCharacter ? 'reveal' : '';
    const waiting = props.waitingAnimation ? 'animate-incognito' : '';
    const questions =  props.questionsMade.map(qs => (
        <li key={qs.question} style={{ display: 'inline-block', marginRight: '5px', textDecoration: qs.done ? 'line-through': ''}}>{qs.question}</li>
        )
    )
   
    return (
        <div className="ComputerCharacterBoxInfo">
            <ul className="ComputerQuestionsMade">
                { questions.length > 0 ? questions : 'no question has been asked' }
            </ul>
            <div className="Who">
            <div className="Who-Card">
                <div className={`Who-Card-Inner ${reveal}`}>
                <div className="Who-Front" style={characterStyle}></div>
                <div className="Who-Back">
                    <i className={`fas fa-user-secret ${waiting}`}></i>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default computerCharacterBoxInfo;