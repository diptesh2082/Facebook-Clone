import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import {actionTypes} from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();

    const signin = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=>alert(error.message));
    };
    return ( 
        <div className="login">
            <div className="login__logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" 
                alt=""
                />
            </div>
             <Button type="submit" onClick={signin}>
                 Sign in
             </Button>
        </div>
    )
}

export default Login
