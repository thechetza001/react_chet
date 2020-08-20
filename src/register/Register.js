import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";
import Showdata from "../showdata/Showdata";
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            idkey:"",
            firstname:"",
            lastname:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
}
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = `https://pichet.iamnonny.work/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname
        }
	axios.post(url,data)
        	this.setState({
            		idkey:"",
            		firstname:"",
            		lastname:""
        });
    }
        render() {
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container">
                    <div className="form-group">
                        <label className="text-white" >First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} valu
e={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value
={this.state.lastname}/>
                    </div>
           <Link to={'./Showdata'}>  <button type="button" className="btn btn-primary" onClick={this.handleClicked}
>Submit</button>  </Link>
                </form>
            </div>
        );
    }
}
