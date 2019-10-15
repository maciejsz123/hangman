import React from 'react';
import '../styles/App.sass';

function EndOfTheGame(props) {
  return(
    <React.Fragment>
      <div className="endOfGame" style={{'background': props.color}}>
      {props.mess}
      <button type="button" className="playAgain" onClick={() => {window.location.reload()}}>PLAY AGAIN</button>
      </div>
    </React.Fragment>
  )
}

export default EndOfTheGame;
