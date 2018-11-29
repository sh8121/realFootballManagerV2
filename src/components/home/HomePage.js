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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{"text-align":"center"}}>Hello, {team.teamName}</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Link to="/players" className="btn btn-primary btn-block">Players</Link>
                    </div>
                </div>
                <div className="row justify-content-center" style={{"margin-top":"10px"}}>
                    <div className="col-6">
                        <Link to="/matches" className="btn btn-primary btn-block">Matches</Link>
                    </div>
                </div>
                <div className="row justify-content-center" style={{"margin-top":"10px"}}>
                    <div className="col-6">
                        <Link to="/login" className="btn btn-link btn-block">Logout</Link>
                    </div>
                </div>
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