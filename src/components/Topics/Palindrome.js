import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      input: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ input: val });
  }

  isPalindrome(input) {
    let forwards = input;
    let backwards = input;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.input) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}