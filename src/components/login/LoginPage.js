import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            teamName: "",
            password: "",
            submitted: false
        }
    }
}