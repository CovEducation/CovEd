import React, { Component, useContext } from "react";
import { Router } from "@reach/router";

import { UserContext } from "../../providers/UserProvider";
import { Redirect } from "@reach/router";

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
                {this.context ? <Component user={this.context}/> : <Redirect to="/auth"/>}
            </>
        )
    }
}

export default ProtectedPage;
