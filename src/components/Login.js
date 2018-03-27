<<<<<<< HEAD
import React from 'react';

const message= (db) =>{
    //console.log(db.database().ref('sprint-notes/'));
    let email = document.getElementsByClassName('loginEmail')[0].value;
    let password = document.getElementsByClassName('loginPassword')[0].value;

    const dbRefObject = db.database().ref();
    dbRefObject.on('value', function(snap) {
      console.log(snap.val());
    })
		
		if(email !== "" && password !== ""){
			//$('#loginProgress').show();
			db.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        alert(error.message);
       
				//$('#loginError').show().text(error.message);
				//$('#loginProgress').hide();
			})
		}
}

const Login = ({db}) => {
  // functions here
 

    return (
      <div className="row margin-top">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12 m6 offset-m3">
            <i className="material-icons prefix">email</i>
            <input id="icon_prefix" type="text" className="validate loginEmail"/>
            <label htmlFor="icon_prefix">correo electrónico</label>
          </div>
        </div>
        <div className="row">
        <div className="input-field col s12 m6 offset-m3">
          <i className="material-icons prefix">create</i>
          <input id="icon_telephone" type="tel" className="validate loginPassword"/>
          <label htmlFor="icon_telephone">contraseña</label>
        </div>
      </div>
      <div className="center-align">
          <a onClick={()=>{message(db)}} id="loginBtn" className="waves-effect waves-light btn">LOG IN</a>
       </div>
     </form>
    </div>
    )
=======
import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom'

class Login extends Component {
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
        <NavLink to={"/Sprints"}  className="waves-effect waves-light btn">LOGIN</NavLink>
         </div>
       </form>
     </div>
    )
  }
>>>>>>> 6195d725e4d5e287b672dd836c4ef5d23fb511c2
}

// Default Props here

export default Login;
