import { FETCH_WORD_REQUEST,
  FETCH_WORD_RECEIVED,
  FETCH_WORD_ERROR,
  PRESS_KEY,
  END_THE_GAME } from './types';

export const fetchWord = () => dispatch => {
  dispatch({type: FETCH_WORD_REQUEST});
  const key = '8A3N7K5H';
  const numberOfWords = 5;

  fetch(`https://random-word-api.herokuapp.com/word?key=${key}&number=${numberOfWords}`)
    .then(data => data.json())
    .then(words => {
      let longestWord = words.reduce((prevWord, actualWord) => {
        return (prevWord.length > actualWord.length ? prevWord : actualWord);
      });
      dispatch({
        type: FETCH_WORD_RECEIVED,
        payload: longestWord.toUpperCase()
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_WORD_ERROR,
        payload: 'WRONGAPIKEY'
      })
    });
};

export const getLetter = () => dispatch => {
  document.onkeydown = function(e) {
    dispatch({
      type: PRESS_KEY,
      payload: e.key.toUpperCase()
    });
  }
}

export const endOfGame = (condition) => dispatch => {
  document.onkeydown = null;
  if(condition === 'lost') {
    dispatch({
      type: END_THE_GAME,
      payload: false
    });
  } else if(condition === 'win') {
    dispatch({
      type: END_THE_GAME,
      payload: true
    });
  }
}
