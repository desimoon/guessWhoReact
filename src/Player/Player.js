import React from 'react';

const playerQuestions = (props) => {
    let block;
    switch (props.turn) {
        case 'player2': 
            block = (
                <div className="controls">
                    <h3 className="Tip">Tip: {props.tip}</h3>
                    { !props.choosenCharacter ? null : (
                        <>
                        <form onSubmit={props.match}>
                            <input type="text" placeholder="name" value={props.who} onChange={props.try} />
                            <input type="submit" value="Is" style={{ marginLeft: '5px' }}/>
                        </form>
                        <div className="btn-actions">
                        {
                            props.controls.map((control, ind) => (
                                <button key={control.feature + '-' + control.value}
                                        onClick={() => props.remove(control.feature, control.value, ind)}
                                        disabled={control.disabled}>
                                    {control.value === true ? control.feature : control.value }
                                </button>
                                )
                            )
                        }
                        </div>
                        {/* <ul className="Debug">
                            { props.charactersPlayer1.map(ch => (
                                <li key={ch.name} style={{ display: 'inline-block', marginRight: '5px', fontSize: '.8rem'}}>{ch.name}</li>
                            ))}
                        </ul> */}
                        </>
                    )
                    }
                </div> 
            );
            break;
        case 'player1': 
            block = (
                <div className="Question">
                    { props.question ? <h3>{props.turn} ask: {props.question.question}</h3> : null }
                    <div>
                        <button onClick={
                            () => props.names.includes(props.question.value) ? ( 
                                props.isCharacter('yes')
                            ) : ( 
                            props.answer('yes')
                        )}>
                            YES
                        </button>
                        <button onClick = {
                            () => props.names.includes(props.question.value) ? (
                                props.isCharacter('no')
                            ) : (
                                props.answer('no')
                        )}>
                            NO
                        </button>
                    </div>
                    { props.tip ? <h3 className="Tip">Tip: {props.tip}</h3> : null }
                </div>
            );
            break;
        default:
            block = (
                <div>
                    { props.tip ? <h3 className="Tip">Tip: {props.tip}</h3> : null }
                    <button className="PlayAgain" onClick={() => props.restart()}>Play Again</button>
                </div>
            )
    }
    return (
        <div className="Player">
            
            <div className="control-player">
                { block }             
            </div>
        </div>
    )
}

export default playerQuestions;