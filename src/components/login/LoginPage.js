import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import { teamActions } from "../../actions";

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.props.dispatch(teamActions.logout());

        this.state = {
            teamName: "",
            password: "",
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            submitted: true
        });

        const { teamName, password } = this.state;
        const { dispatch } = this.props;

        if(teamName && password){
            dispatch(teamActions.login(teamName, password));
        }
    }

    render(){
        const { teamName, password, submitted } = this.state;
        const { loggingIn } = this.props;

        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="teamName">Team Name</label>
                        <input type="text" className="form-control" name="teamName" value={teamName} onChange={this.handleChange}/>
                        { submitted && !teamName &&
                        <small className="form-text">TeamName is required</small> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
                        { submitted && !password &&
                        <small className="form-text">Password is required</small>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                        {loggingIn &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    }
}

LoginPage = connect(mapStateToProps)(LoginPage);

export { LoginPage };