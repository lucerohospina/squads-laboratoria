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
      this.arrangeStudents = this.arrangeStudents.bind(this);
      this.saveInfo = this.saveInfo.bind(this);
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

  arrangeStudents() {
    console.log('click desde arrangeStudents');
  }

  saveInfo() {
    console.log('click desde saveInfo');
  }

  render() {
    return (
      <div className="center-align margin-top">
        <p>Selecciona el SPRINT</p>
        <i onClick={this.changeSprintBack} className="material-icons prefix">chevron_left</i>
        <span>SPRINT {this.state.sprint}</span>
        <i onClick={this.changeSprintForward} className="material-icons prefix">chevron_right</i>
        <div className="row">
          <a className="waves-effect waves-light btn" onClick={this.arrangeStudents}>Reorganizar</a>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn" onClick={this.saveInfo}>Guardar</a>
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