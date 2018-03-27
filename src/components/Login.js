import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    // states here
      this.state = {
        visibility: true
      }
    // binding here
    this.handleVisibility = this.handleVisibility.bind(this);
  }    
  // lifecycles
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  // functions here
  handleVisibility() {
    console.log("click desde handleVisibility");
    this.setState((prevState) => {
      return {
        visibility: false
      }
    })
  }
  
  render() {
    return (
      <div className="row margin-top">
        {this.state.visibility &&
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <i className="material-icons prefix">email</i>
              <input id="icon_prefix" type="text" className="validate"/>
              <label htmlFor="icon_prefix">correo electrónico</label>
            </div>
          </div>
          <div className="row">
          <div className="input-field col s6 offset-s3">
            <i className="material-icons prefix">create</i>
            <input id="icon_telephone" type="tel" className="validate"/>
            <label htmlFor="icon_telephone">contraseña</label>
          </div>
        </div>
        <div className="center-align">
          <NavLink onClick={this.handleVisibility} to="/Sprints" className="waves-effect waves-light btn">LOGIN</NavLink>
        </div>
       </form>}
     </div>
    )
  }
}

// Default Props here

export default Login;
