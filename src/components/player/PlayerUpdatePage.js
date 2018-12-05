import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {playerServices} from "../../services";
import {alertActions} from "../../actions";
import {history} from "../../helpers/history";

class PlayerUpdatePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            number: -1,
            position: "",
            submitted: false 
        }

        this.numberOptionArr = [];
        for(let i = 1; i <= 99; i++)
            this.numberOptionArr.push(i);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            submitted: true
        });        
        const {dispatch} = this.props;
        const {id} = this.props.match.params;
        const {name, number, position} = this.state;
        if(name && (number !== -1) && position){
           playerServices.update(id, number, position)
           .then((result) => {
                history.push("/players");
                dispatch(alertActions.success(result.message));
           })
           .catch((error) => {
                history.push("/");
                dispatch(alertActions.failure(error.message));
           })
        }
    }

    componentDidMount(){
        const {dispatch} = this.props;
        const {id} = this.props.match.params; 
        playerServices.findOneById(id)
        .then((result) => {
            const {name, number, position} = result.player;
            this.setState({
                name,
                number,
                position
            });
            dispatch(alertActions.success(result.message));
        })
        .catch((error) => {
            history.push("/");
            dispatch(alertActions.failure(error.message));
        });
    }

    render(){
        const { name, number, position, submitted } = this.state;

        return(
            <div>
                <h2>Update Player</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" value={name} readOnly/>
                        {submitted && !name &&
                        <small className="form-text">Name is required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <select name="number" className="form-control" onChange={this.handleChange} value={number}>
                            <option value={-1}>Not Selected</option>
                            {this.numberOptionArr.map((val) =>
                                <option value={val}>{val}</option>)}
                        </select>
                        {submitted && (number === -1) &&
                        <small className="form-text">Number is required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <select name="position" className="form-control" onChange={this.handleChange} value={position}>
                            <option value="">Not Selected</option>
                            <option value="GK">GK</option>
                            <option value="DF">DF</option>
                            <option value="MF">MF</option>
                            <option value="FW">FW</option>
                        </select>
                        {submitted && !position &&
                        <small className="form-text">Position is required</small>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update</button>                        
                        <Link to="/players" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

PlayerUpdatePage = connect()(PlayerUpdatePage);

export {PlayerUpdatePage};