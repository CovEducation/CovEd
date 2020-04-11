import React, { Component, createContext } from "react";
import { auth } from "../firebase-config";
import { get } from "../utilities.js";
// https://reactjs.org/docs/context.html
export const UserContext = createContext({user : undefined});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {user: undefined};
    }

    componentDidMount() {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    try {
                        let user = await get("/api/tutee", { token: token });
                        let role = "tutee";

                        // if the user is not a student 
                        if (user.length == 0) {
                            user = await get("/api/tutor", { token: token });
                            role = "tutor";
                        }

                        user = user[0];
                        user.role = role;
                        user.token = token;
                        this.setState({ user: user });

                    } catch (err) {
                        console.log(err);
                    }

                } catch (error) {
                    // TODO:handle error
                    console.log(error);
                }
            } else {
                this.setState({user: undefined});
            }
        });
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

