import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword} from './utils/firebase';
import Input from './Input';
import './Login.css';

const style = {
    color:"blue",
    fontSize:"15px"
}

const Login = (props)=> {

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
    const {email, password} = contact

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const navigate = useNavigate()
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        try{
            const response = await signinAuthUserWithEmailAndPassword(email,password);
            //console.log(response)
            navigate("/homepage")
        }
        catch(error){
            console.log('error in login', error.message)
            if(error.message.includes("wrong-password")) {
                alert("Incorrect username/password")
            }
        }
    }

    return(
        <div className="login">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Your Email:</h2>
            <div className='center'>
                <Input
                name= 'email'
                type= 'text'
                placeholder ='email'
                onChange = {handleChange}
                value = {contact.email}
                />
            </div>
            <h2>Your Password:</h2>
            <div className='center'>
                <Input
                name= 'password'
                type= 'password'
                placeholder ='password'
                onChange = {handleChange}
                value = {contact.password}
                />
            </div>
            <br></br>
            <div className='center'>
                <button onClick={handleSubmit}>
                    Login
                </button>
            </div>
            <br></br>
            <div className='center'>
                <Link to='/signup' style={style}>
                    Sign Up
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Login;