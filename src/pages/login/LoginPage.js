import {Link, useNavigate} from "react-router-dom";
import React, {useState} from 'react';

import {MdError} from 'react-icons/md'
import {signInWithEmailAndPassword } from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import welcome_logo from '../../assets/img/welcome_logo.png';
import {LoginPageStyles, SignInSection, FormItem} from './styles';
import {auth} from "./../../libs/firebase";
import { Label, Input } from "./../../ui/forms";
import {SubmitButton} from "./../../ui/buttons";


function LoginPage(props) {
    const navigator = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const notify = (error) => toast.error(error.code,
    {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon:<MdError/>
    });


    function onLoginRequest(e)
    {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigator('/dashboard') 
        })
        .catch(error=>{
            // add toast messages
            notify(error)
        })
    }
    return( 
        <>
        <LoginPageStyles>
            <ToastContainer/>
            <img src={welcome_logo} ></img>
            <SignInSection onSubmit={onLoginRequest}>
                <div>
                    <h2>Welcome to ValleyRose! <span><p>please sign in</p></span></h2>
                </div>
                <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <Input type ="email" placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)}></Input>
                </FormItem>
                <FormItem>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" placeholder="Type Your Password" onChange={(e)=>setPassword(e.target.value)}></Input>
                    <Link to="../pagenotfound">Forgot password ?</Link>
                </FormItem>
                <FormItem>
                    <SubmitButton type="submit">Sign In</SubmitButton>
                </FormItem>
            </SignInSection>
        </LoginPageStyles>
        </>        
    );
}

export default LoginPage 

