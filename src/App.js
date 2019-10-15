import React, { Component } from 'react';
import { connect } from 'react-redux';
import Man from './components/man';
import Missed from './components/missed';
import Correct from './components/correct';
import './styles/App.sass';
import { fetchWord } from './actions/wordActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchWord();
  }

  render() {
    if(!this.props.word) {
      return <div className="Loading">Loading...</div>
    } else {
      return (
        <div className="App">
          <Man />
          <Missed />
          <Correct />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  word: state.word.word
});

export default connect(mapStateToProps, { fetchWord })(App);
