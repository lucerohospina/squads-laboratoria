import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    // states here
      
    // binding here
      
  }
  // lifecycles
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  // functions here

  render() {
    return (
      <div className="row margin-top">
        <div className="col s12 m6 ">
          <div className="card">
            <span className="card-title black-text">
            <i className="material-icons">dialpad</i>Squad</span>
            <div id="sq1" className="row container-images dropheigth">
              <p className="col s4">STUDENT 1</p>
              <p className="col s4">STUDENT 2</p>
              <p className="col s4">STUDENT 3</p>
              <p className="col s4">STUDENT 4</p>
              <p className="col s4">STUDENT 5</p>
              <p className="col s4">STUDENT 6</p>            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// default props here

export default Card;