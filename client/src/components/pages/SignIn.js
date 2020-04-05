import React, { Component } from "react";

import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";

// auth 
import firebase, {auth} from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "@reach/router"
// TODO : THERE IS SO MUCH HACK CODE HELP!!!
const withNavigate = (Component) => {
    return (props) => {
      const navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
    }
  }

class SignIn extends Component {
  // set context
  static contextType = UserContext;
  
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {ok: false, user: undefined, error: undefined, msg: undefined};
    this.state.form = {email: undefined, password: undefined};
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async signin(event) {
    event.preventDefault();
    try {
        const user = await auth.signInWithEmailAndPassword(this.state.form.email, this.state.form.password);
        console.log(user);
        this.props.navigate('/profile');
    } catch(error) {
        console.log(error);
        this.setState({error: error});
    }
  }

  handleChange(event) {
      const form = this.state.form;
      form[event.target.name] = event.target.value
      this.setState({form: form});
  }

  render() {
    return (
        <>
        <h1>Sign In</h1>
         
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

            <button onClick={this.signin}>Sign In</button>
          
        </>
    );
  }
}

export default withNavigate(SignIn);
