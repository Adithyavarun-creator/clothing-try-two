import React,{Component} from "react";
import './Signin.styles.scss'

import FormInput from "../Form-Input/FormInput";
import Button from "../CustomButton/Button";
import { auth, SignInWithGoogle } from '../../Firebase/Firebase.utils'

class Signin extends Component{
    constructor(props){
        super(props)


        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit =async event =>{
        event.preventDefault()

        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email:'',
                password:''
            })
        }catch(error){
            console.log(error);
        }

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event =>{
        const {value,name} = event.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
            
            <FormInput
            name="email" 
            type="email"
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
            required />
            <label>Email</label>

            <FormInput name="password" 
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required />
            <label>Password</label>

            <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={SignInWithGoogle} isGoogleSignIn>
                Sign in with Google</Button>
                </div>
            </form>
            </div>
        )
    }
}

export default Signin