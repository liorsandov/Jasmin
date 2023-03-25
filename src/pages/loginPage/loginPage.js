import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { changeContext } from '../../utils/sdk';
import './loginPage.css';
import { postApi, action } from '../../utils/sdk';
import biocatchSVG from '../../utils/assets/biocatch-svg.svg'

export default function LoginPage(props) {

    function changeUserData(e) {
        const inputData = e.target.value;
        const userData = props.userData;
        if (e.target.id === 'login-username') {
            userData.userName = inputData;
            props.setUserData(userData)
        }
        if (e.target.id === 'login-password') {
            userData.Pass = inputData;
            props.setUserData(userData)
        }
    }

    function submitClicked() {
        props.setView('AccountOverview')
        // postApi(action.INIT)
    }

    useEffect(() => {
        // debugger
        // changeContext('Login-Page')
    });
    return (
        <>
            <img className='biocatchSVG fadeIn' src={biocatchSVG} alt="React Logo" />
            <div className='login-form'>
                <TextField
                    id="login-username"
                    data-automation-id="custom_username"
                    style={{ margin: '1rem' }}
                    name='username'
                    label="User Name"
                    variant="outlined"
                    onChange={(e) => changeUserData(e)} />
                <TextField
                    id="login-password"
                    data-automation-id="custom_password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => changeUserData(e)} />
                <div className='submit-btn'>
                    <Button id="SubmitLogin" variant="outlined" onClick={() => submitClicked()}>Login</Button>
                </div>
            </div>
        </>
    )
}