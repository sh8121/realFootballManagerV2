import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { playerActions } from "../../actions";

class PlayerCreatePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            number: -1,
            position: "",
            submitted: false
        };

        this.numberOptionArr = [];
        for(let i = 1; i <= 99; i++)
            this.numberOptionArr.push(i);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            submitted: true
        });

        const { name, number, position } = this.state;
        const { dispatch } = this.props;

        if(name && number && position){
            dispatch(playerActions.create(name, number, position));
        }
    }

    render(){
        const { name, number, position, submitted } = this.state;
        const { creating } = this.props;

        return(
            <div>
                <h2>Create Player</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" value={name} onChange={this.handleChange}/>
                        {submitted && !name &&
                        <small className="form-text">Name is required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <select name="number" className="form-control" onSelect={this.handleChange}>
                            <option value={-1}>Not Selected</option>
                            {this.numberOptionArr.map((val) =>
                                <option value={val}>{val}</option>)}
                        </select>
                        {submitted && (number === -1) &&
                        <small className="form-text">Number is required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <select name="position" className="form-control" onSelect={this.handleChange}>
                            <option value="">Not Selected</option>
                            <option value="GK">GK</option>
                            <option value="DF">DF</option>
                            <option value="MF">MF</option>
                            <option value="FW">FW</option>
                        </select>
                        {submitted && !position &&
                        <small className="form-text">Position is required</small>}
                    </div>
                </form>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Create</button>
                    {creating &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                    <Link to="/players" className="btn btn-link">Cancel</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { creating } = state.player.creation;
    return {
        creating
    };
}

PlayerCreatePage = connect(mapStateToProps)(PlayerCreatePage);

export { PlayerCreatePage };
