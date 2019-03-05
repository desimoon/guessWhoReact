import React, { Component } from 'react';
import Character from './Character/Character';
import PlayerQuestions from './Player/Player';
import PlayerCharacterBoxInfo from './Player/PlayerCharacterBoxInfo';
import ComputerCharacterBoxInfo from './Computer/ComputerCharacterBoxInfo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
 
  componentDidMount() {
    let { charactersPlayer1 } = this.state;
    let randomCharacter = Math.floor(Math.random() * charactersPlayer1.length);
    let character = charactersPlayer1[randomCharacter];
    this.setState({ choosenCharacterComputer: character });
  }

  getInitialState = () => {
    const state = {
      charactersName: ['Alex', 'Alfred', 'Anita', 'Anne', 'Bernard', 'Bill', 'Charles', 'Claire', 'David', 'Eric', 'Frans', 'George', 'Herman', 'Joe', 'Maria', 'Max', 'Paul', 'Peter', 'Philip', 'Richard', 'Robert', 'Sam', 'Susan', 'Tom'],
      characters: [
        { name: 'Alex', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-alex.jpg' },
        { name: 'Alfred', gender: 'male', hair: 'red hair', eyes: 'light eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-alfred.jpg' },
        { name: 'Anita', gender: 'female', hair: 'blonde hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-anita.jpg' },
        { name: 'Anne', gender: 'female', hair: 'dark hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-anne.jpg' },
        { name: 'Bernard', gender: 'male', hair: 'brown hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-bernard.jpg' },
        { name: 'Bill', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: true, glasses: false, img: 'guess-who-bill.jpg' },
        { name: 'Charles', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-charles.jpg' },
        { name: 'Claire', gender: 'female', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: true, img: 'guess-who-claire.jpg' },
        { name: 'David', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: false, glasses: false, img: 'guess-who-david.jpg'},
        { name: 'Eric', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-eric.jpg'},
        { name: 'Frans', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-frans.jpg'},
        { name: 'George', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-george.jpg'},
        { name: 'Herman', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: true, glasses: false, img: 'guess-who-herman.jpg'},
        { name: 'Joe', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: true, img: 'guess-who-joe.jpg'},
        { name: 'Maria', gender: 'female', hair: 'brown hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-maria.jpg'},
        { name: 'Max', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-max.jpg' },
        { name: 'Paul', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: true, img: 'guess-who-paul.jpg' },
        { name: 'Peter', gender: 'male', hair: 'white hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-peter.jpg' },
        { name: 'Philip', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: false, glasses: false, img: 'guess-who-philip.jpg' },
        { name: 'Richard', gender: 'male', hair: 'brown hair', eyes: 'dark eyes', mustache: true, hat: false, beard: true, bald: true, glasses: false, img: 'guess-who-richard.jpg' },
        { name: 'Robert', gender: 'male', hair: 'brown hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-robert.jpg' },
        { name: 'Sam', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: true, glasses: true, img: 'guess-who-sam.jpg' },
        { name: 'Susan', gender: 'female', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-susan.jpg' },
        { name: 'Tom', gender: 'male', hair: 'dark hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: true, glasses: true, img: 'guess-who-tom.jpg' },
      ],
      charactersPlayer1: [
        { name: 'Alex', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-alex.jpg' },
        { name: 'Alfred', gender: 'male', hair: 'red hair', eyes: 'light eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-alfred.jpg' },
        { name: 'Anita', gender: 'female', hair: 'blonde hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-anita.jpg' },
        { name: 'Anne', gender: 'female', hair: 'dark hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-anne.jpg' },
        { name: 'Bernard', gender: 'male', hair: 'brown hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-bernard.jpg' },
        { name: 'Bill', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: true, glasses: false, img: 'guess-who-bill.jpg' },
        { name: 'Charles', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-charles.jpg' },
        { name: 'Claire', gender: 'female', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: true, img: 'guess-who-claire.jpg' },
        { name: 'David', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: false, glasses: false, img: 'guess-who-david.jpg'},
        { name: 'Eric', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-eric.jpg'},
        { name: 'Frans', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-frans.jpg'},
        { name: 'George', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-george.jpg'},
        { name: 'Herman', gender: 'male', hair: 'red hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: true, glasses: false, img: 'guess-who-herman.jpg'},
        { name: 'Joe', gender: 'male', hair: 'blonde hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: true, img: 'guess-who-joe.jpg'},
        { name: 'Maria', gender: 'female', hair: 'brown hair', eyes: 'dark eyes', mustache: false, hat: true, beard: false, bald: false, glasses: false, img: 'guess-who-maria.jpg'},
        { name: 'Max', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: true, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-max.jpg' },
        { name: 'Paul', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: true, img: 'guess-who-paul.jpg' },
        { name: 'Peter', gender: 'male', hair: 'white hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-peter.jpg' },
        { name: 'Philip', gender: 'male', hair: 'dark hair', eyes: 'dark eyes', mustache: false, hat: false, beard: true, bald: false, glasses: false, img: 'guess-who-philip.jpg' },
        { name: 'Richard', gender: 'male', hair: 'brown hair', eyes: 'dark eyes', mustache: true, hat: false, beard: true, bald: true, glasses: false, img: 'guess-who-richard.jpg' },
        { name: 'Robert', gender: 'male', hair: 'brown hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-robert.jpg' },
        { name: 'Sam', gender: 'male', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: true, glasses: true, img: 'guess-who-sam.jpg' },
        { name: 'Susan', gender: 'female', hair: 'white hair', eyes: 'dark eyes', mustache: false, hat: false, beard: false, bald: false, glasses: false, img: 'guess-who-susan.jpg' },
        { name: 'Tom', gender: 'male', hair: 'dark hair', eyes: 'light eyes', mustache: false, hat: false, beard: false, bald: true, glasses: true, img: 'guess-who-tom.jpg' },
      ],
      filterButtons: [ 
        {feature: 'gender', value: 'male', disabled: false}, 
        {feature: 'gender', value: 'female', disabled: false}, 
        {feature: 'hair', value: 'dark hair', disabled: false}, 
        {feature: 'hair', value: 'brown hair', disabled: false},
        {feature: 'hair', value: 'red hair', disabled: false},
        {feature: 'hair', value: 'blonde hair', disabled: false},
        {feature: 'hair', value: 'white hair', disabled: false},
        {feature: 'eyes', value: 'dark eyes', disabled: false},
        {feature: 'eyes', value: 'light eyes', disabled: false},
        {feature: 'mustache', value: true, disabled: false},
        {feature: 'beard', value: true, disabled: false},
        {feature: 'bald', value: true, disabled: false},
        {feature: 'hat', value: true, disabled: false},
        {feature: 'glasses', value: true, disabled: false}
      ],
      choosenCharacterComputer: '',
      choosenCharacterPlayer: null,
      player1Questions: [
        {id: 1, feature: 'gender', value: 'male', question: 'is he a man?', done: false},
        {id: 2, feature: 'gender', value: 'female', question: 'is she a woman?', done: false},
        {id: 3, feature: 'hair', value: 'dark hair', question: 'does he/she have dark hair?', done: false},
        {id: 4, feature: 'hair', value: 'brown hair', question: 'does he/she have brown hair?', done: false},
        {id: 5, feature: 'hair', value: 'red hair', question: 'does he/she have red hair?', done: false},
        {id: 6, feature: 'hair', value: 'blonde hair', question: 'does he/she have blonde hair?', done: false},
        {id: 7, feature: 'hair', value: 'white hair', question: 'does he/she have white hair?', done: false},
        {id: 8, feature: 'eyes', value: 'dark eyes', question: 'does he/she have dark eyes?', done: false},
        {id: 9, feature: 'eyes', value: 'light eyes', question: 'does he/she have light eyes?', done: false},
        {id: 10, feature: 'mustache', value: true, question: 'does he have a mustache?', done: false},
        {id: 11, feature: 'beard', value: true, question: 'does he have a beard?', done: false},
        {id: 12, feature: 'bald', value: true, question: 'is he bald?', done: false},
        {id: 13, feature: 'hat', value: true, question: 'does he/she wear a hat?', done: false},
        {id: 14, feature: 'glasses', value: true, question:  'does he/she wear glasses?', done: false}
      ],
      questionsAlreadyMade: [],
      player1Question: null,
      turn: 'player2',
      who: '',
      waiting: '',
      reveal: false,
      blocksCharacterAfterChoosenOne: false,
      tip: 'Select (click on) a character'
    }
    return state;
  }

  // Seleziona un personaggio
  selectCharacterHandler = (who) => {
    this.setState({ 
      choosenCharacterPlayer: who, 
      tip: 'Ask a question (click on a button)',
      blocksCharacterAfterChoosenOne: true 
    });
  }

  // Rimuovi personaggio/personaggi
  removeCharacterHandler = (feature, value, indBtn) => {
    this.setState({ tip: '' });
    let updateCharacterList;
    const filterButtons = [...this.state.filterButtons];
    // Disabilita button relativo alla domanda effettuata
    filterButtons[indBtn].disabled = true;

    // Mantieni tutti i personaggi che corrispondono a tale domanda
    if (this.state.choosenCharacterComputer[feature] == value) {
      
      updateCharacterList = this.state.characters.filter(ch => ch[feature] === value);
      this.setState({
        characters: updateCharacterList, // Aggiorna lista personaggi
        filterButtons, // aggiorna button status
        tip: 'Ask a question (click on a button)'
      });

    } else { // Mantieni i personaggi differenti da tale domanda e il turno passa al Computer
      
      updateCharacterList = this.state.characters.filter(ch => ch[feature] !== value);
      this.setState({ 
        characters: updateCharacterList, // Aggiorna lista personaggi
        filterButtons // aggiorna button status
      },
      () => {
        this.player1Decision();
      }
      );

    }
  }

  player1Decision = () => {
    // Computer decide se porre una domanda o se provare a dare un nome in base al seguente valore
    // decision > 4 -> scelta random di un personaggio
    // decision <= 4 -> scelta della domanda da fare
    const decision = Math.floor(Math.random() * 6) + 1;
    // Computer prova un nome
    if (decision > 4 && this.state.questionsAlreadyMade.length > 2) {
      const randomCharacterIndex = Math.floor(Math.random() * this.state.charactersPlayer1.length);
      const tryCharacter = this.state.charactersPlayer1[randomCharacterIndex];

      this.setState({
        player1Question: {
          id: 15,
          feature: 'try',
          value: `${tryCharacter.name}`,
          question: `is he/she ${tryCharacter.name} ?`
        },
        turn: 'player1'
      });      

    } else {
      // Computer fa una domanda
      this.questionPlayer1Handler();
    }
  }

  inputNameHandler = (e) => {
    const capitalizeFirstLetterName = e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1);
    this.setState({ who: capitalizeFirstLetterName });
  }

  matchingHandler = (e) => {
    e.preventDefault();
    // let updateCharacterList;
    this.setState({ waiting: 'animate-incognito' });
    setTimeout(() => {
      if (this.state.who === this.state.choosenCharacterComputer.name) {
        this.setState({ reveal: true, waiting: '', who: '', turn: 'restart', tip: 'You won! New game?' });
      } else {
        const updateCharacterList = this.state.characters.filter(ch => ch.name != this.state.who);
        this.setState({ waiting: '', who: '', characters: updateCharacterList, turn: 'player1', tip: '' });
        this.questionPlayer1Handler();
      }
    }, 2000)
  }

  answerHandler = (answer) => {
    this.setState({ tip: '' });
    const { value: questionValue, feature: questionFeature, id: questionId } = this.state.player1Question;
    const { questionsAlreadyMade } = this.state;
    let markAsDoneSimilarQuestions = [];

    // Il personaggio ha la caratteristica richiesta
    if (answer == 'yes') {
      if (this.state.choosenCharacterPlayer[questionFeature] == questionValue) {

          let updateCharactersPlayer1List = this.state.charactersPlayer1.filter(ch => {
            return ch[questionFeature] === this.state.choosenCharacterPlayer[questionFeature];
          });

          const updatePlayer1QuestionsList = this.state.player1Questions.filter(question => {
            if (question.feature != questionFeature) {
              return question;
            } else {
              if (question.id === questionId) {
                question.done = true;
                markAsDoneSimilarQuestions.push(question);
              }
              return;
            }
          });

          this.setState({
            charactersPlayer1: updateCharactersPlayer1List,
            player1Questions: updatePlayer1QuestionsList,
            questionsAlreadyMade: [...questionsAlreadyMade, ...markAsDoneSimilarQuestions]
          }, () =>  {
              if (this.state.charactersPlayer1.length < 2) {

                const characterLeft = this.state.charactersPlayer1[Math.floor(Math.random() * this.state.charactersPlayer1.length)];
                this.setState({
                    player1Question: {
                      id: 15,
                      feature: 'last character',
                      value: `${characterLeft.name}`,
                      question: `is he/she ${characterLeft.name} ?`,
                    },
                    turn: 'player1'
                })

              } else {
                this.questionPlayer1Handler();
              }
            } 
          );
        

      } else {
        this.setState({ tip: 'Do not lie! Your character hasn\'t that feature'});
      }
    } else {
      if (this.state.choosenCharacterPlayer[questionFeature] == questionValue) {
        
        this.setState({ tip: 'Do not lie! Your character has that feature' });

      } else {
        let updateCharactersPlayer1List = this.state.charactersPlayer1.filter(ch => {
          if (ch[questionFeature] !== questionValue) {
            return ch;
          } else {
          }
        });
        const updatePlayer1QuestionsList = this.state.player1Questions.filter(question => {
          if (question.feature == questionFeature && question.id == questionId) {
            question.done = true;
            markAsDoneSimilarQuestions.push(question);
            return; 
          } else {
            return question;
          }
        });
        this.setState((prevState) => ({
          charactersPlayer1: updateCharactersPlayer1List,
          player1Questions: updatePlayer1QuestionsList, 
          questionsAlreadyMade: [...prevState.questionsAlreadyMade, ...markAsDoneSimilarQuestions],
          turn: 'player2',
          tip: 'Ask a question (click on a button)'
        }));
      }
    }
  }

  isCharacterHandler = (answer) => {
    if (answer == 'yes') {
      
      if (this.state.choosenCharacterPlayer.name == this.state.player1Question.value) {
        this.setState({ turn: 'restart', tip: 'game over! New game?' })
      } else {
        this.setState({ tip: `Do not lie! You aren't ${this.state.player1Question.value}!` })
      }

    } else {
      
      if (this.state.choosenCharacterPlayer.name == this.state.player1Question.value) {
        this.setState({ tip: `Do not lie! You are ${this.state.player1Question.value}!` })
      } else {
        let updateCharactersPlayer1List = this.state.charactersPlayer1.filter(ch => {
          if (ch.name !== this.state.player1Question.value) {
            return ch;
          } else {
            return;
          }
        });
        this.setState({
          charactersPlayer1: updateCharactersPlayer1List,
          turn: 'player2',
          tip: 'Ask a question (click on a button)'
        })
      }

    }
  }

  questionPlayer1Handler = () => {
    let { player1Questions: questions } = this.state;
    let questionsMade = [];
    const player1QuestionIndex = Math.floor(Math.random() * questions.length);
    const player1Question = questions[player1QuestionIndex];
    
    this.setState({
      player1Question,
      turn: 'player1'
    });
  }

  restartHandler = () => {
    this.setState(this.getInitialState(), () => {
        let { charactersPlayer1 } = this.state;
        let randomCharacter = Math.floor(Math.random() * charactersPlayer1.length);
        let character = charactersPlayer1[randomCharacter];
        this.setState({ choosenCharacterComputer: character });
    });
  }

  render() {
    return (
      <div className="App">

        <div className="Characters">
          { 
            this.state.characters.map((ch, ind) => {
                return <Character key={ch.name} 
                                  character={ch}
                                  freeze={this.state.blocksCharacterAfterChoosenOne}
                                  choose={this.selectCharacterHandler} />
            })
          }
        </div>

        <PlayerCharacterBoxInfo 
          choosenCharacter={this.state.choosenCharacterPlayer}
        />

        <PlayerQuestions characters={this.state.characters}
                charactersPlayer1={this.state.charactersPlayer1}
                choosenCharacter={this.state.choosenCharacterPlayer}
                names={this.state.charactersName}
                controls={this.state.filterButtons}
                remove={this.removeCharacterHandler}
                try={this.inputNameHandler}
                who={this.state.who}
                match={this.matchingHandler}
                isCharacter={this.isCharacterHandler}
                tip={this.state.tip}
                turn={this.state.turn}
                question={this.state.player1Question}
                answer={this.answerHandler}
                restart={this.restartHandler} />

        <ComputerCharacterBoxInfo 
          characterSelected={this.state.choosenCharacterComputer}
          questionsMade={this.state.questionsAlreadyMade}
          revealCharacter={this.state.reveal}
          waitingAnimation={this.state.waiting} 
        />

      </div>
    );
  }
}

export default App;
