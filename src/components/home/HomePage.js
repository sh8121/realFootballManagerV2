import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { team } = this.props;

        return(
            <div>
                <h2>Hello, {team.teamName}</h2>
                <Link to="/login" className="btn btn-link">Logout</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { team } = state.authentication;
    return{
        team
    };
}

HomePage = connect(mapStateToProps)(HomePage);

export { HomePage };