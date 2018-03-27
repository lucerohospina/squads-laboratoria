import React, { Component } from 'react';

<<<<<<< HEAD
=======

>>>>>>> 6195d725e4d5e287b672dd836c4ef5d23fb511c2
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
        <i onClick={this.changeSprintBack} className="material-icons prefix">chevron_left</i>
        <span>SPRINT {this.state.sprint}</span>
        <i onClick={this.changeSprintForward} className="material-icons prefix">chevron_right</i>
<<<<<<< HEAD
=======
        <p>Este es un componente que debe de aparecer en lugar del componente LOGIN que esta ahi arriba</p>
>>>>>>> 6195d725e4d5e287b672dd836c4ef5d23fb511c2
      </div>
    )
  }
}

Sprints.defaultProps = {
  sprint: 1
};

export default Sprints;