import React, { Component } from "react";
import './Signup.styles.scss'
import FormInput from "../Form-Input/FormInput";
import Button from "../CustomButton/Button";

import { auth,createUserProfileDocument } from "../../Firebase/Firebase.utils";


class Signup extends Component{
    constructor(props){
        super(props)

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

    }

    handleSubmit = async(event) =>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return
        }

        try{
            
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            
            await createUserProfileDocument(user,{displayName})
            
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.log(error);
        }

    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render(){

        const {displayName,email,password,confirmPassword} = this.state

        return(
            <div className="sign-up">
                <h2 className="title">I dont have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                <FormInput type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                />

                <FormInput type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
                />  

                <FormInput type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="password"
                required
                />

                <FormInput type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="confirm Password"
                required
                />

                <Button type="submit">Signup</Button>
                </form>
            </div>
        )
    }
}

export default Signup