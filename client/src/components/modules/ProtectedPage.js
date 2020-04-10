import React, { Component, useContext } from "react";
import { Router } from "@reach/router";

import { get } from "../../utilities";
import firebase, { auth } from "../../firebase-config";

import { UserContext } from "../../providers/UserProvider";

class ProtectedPage extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { user: undefined };
    }

    componentDidMount() {}

    render() {
        const Component = this.props.component;
        console.log(this.context)
        return (
            <>
                {this.context ? <Component user={this.context}/> : <p>Not Logged in</p>}
            </>
        )
    }
}

export default ProtectedPage;
