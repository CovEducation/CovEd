import React, { Component, createContext } from "react";
import { auth } from "../firebase-config";
// https://reactjs.org/docs/context.html
export const UserContext = createContext({user : undefined});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {user: undefined};
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({user: user});
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;

