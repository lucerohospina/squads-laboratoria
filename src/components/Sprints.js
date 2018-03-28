import React, { Component } from 'react';
import Card from './Card';

class Sprints extends Component {
  constructor(props) {
    super(props);
    // states here
      this.state = {
        sprint: props.sprint
      }
    // binding here
      this.changeSprintBack = this.changeSprintBack.bind(this);
      this.changeSprintForward = this.changeSprintForward.bind(this);
  }
  // lifecycles
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  // functions here
  changeSprintBack() {
    console.log('going back');
    this.setState((prevState) => {
      return {
        sprint: prevState.sprint - 1 
      };
    });
  }

  changeSprintForward() {
    console.log('going forward');
    this.setState((prevState) => {
      return {
        sprint: prevState.sprint + 1 
      };
    });
  }

  render() {
    return (
      <div className="center-align margin-top">
        <p>Selecciona el SPRINT</p>
        <i onClick={this.changeSprintBack} className="material-icons prefix">chevron_left</i>
        <span>SPRINT {this.state.sprint}</span>
        <i onClick={this.changeSprintForward} className="material-icons prefix">chevron_right</i>
        <div className="row">
          <a className="waves-effect waves-light btn">Reorganizar</a>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn">Guardar</a>
        </div>
        <Card/>
      </div>
    )
  }
}

Sprints.defaultProps = {
  sprint: 1
};

export default Sprints;