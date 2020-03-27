import React, { Component } from "react";

import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";

// auth 
import firebase, {auth} from "../../firebase-config";

class Authpage extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {ok: false, user: undefined, error: undefined, msg: undefined};
    this.state.form = {email: undefined, password: undefined};

    this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);

    this.auth_get = this.auth_get.bind(this);

    this.handleChange = this.handleChange.bind(this);

    auth.onAuthStateChanged((user) => {
        this.setState({
            error: undefined,
            user : user
        });
    });
  }

  auth_get() {
      auth.currentUser.getIdToken()
        .then(token => {
            get('/api/auth_get', {token: token})
                .then(res => {
                    this.setState({msg : res});
                })
                .catch(err => {
                    console.log(err);
                });
        }).catch(err => {
            console.log(err);
        });
  }

  
  async signup() {
    event.preventDefault();
    try {
        const user = await auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password);
        console.log(user);
    } catch (error) {
        console.log(error);
        this.setState({error: error});
    }
  }

  async signin(event) {
    event.preventDefault();
    try {
        const user = await auth.signInWithEmailAndPassword(this.state.form.email, this.state.form.password);
        console.log(user);
    } catch(error) {
        console.log(error);
        this.setState({error: error});
    }
  }

  signout() {
      auth.signOut();
  }

  handleChange(event) {
      const form = this.state.form;
      form[event.target.name] = event.target.value
      this.setState({form: form});
  }

  render() {
    return (
        <>
        <h1>Coved Firebase Auth Test</h1>
        <pre style={{ height: 300, overflow: "auto" }}>
            {JSON.stringify(this.state, null, 2)}
        </pre>
            
            <form>
                <label>
                    Email:
                    <input type="text" name="email" 
                        value={this.state.form.email} 
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" 
                        value={this.state.form.password} 
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <button onClick={this.signup}>Sign Up</button>
            <button onClick={this.signin}>Sign In</button>
            <button onClick={this.signout}>Sign Out</button>
            <button onClick={this.auth_get}>Sign Out</button>
        </>
    );
  }
}

export default Authpage;
