import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      input: ''
    }
  }

  handleChange(value) {
    this.setState({ input: value });
  }

  assignEvenAndOdds(input) {
    let arr = input.split(',');
    let evens = [];
    let odds = [];

    for ( let i = 0; i < arr.length; i++ ) {
      if (arr[i] % 2 === 0) {
        evens.push( parseInt(arr[i]) );
      } else {
        odds.push( parseInt(arr[i]) );
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.input) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}