import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { changeContext } from '../../utils/sdk';
import './makeTransfer.css';
import { postApi, action } from '../../utils/sdk';

export default function MakeTransfer(props) {
    const [state, setState] = useState(false);
    useEffect(() => {
        changeContext('Make-Payments-Page')
    });

    function makePayment() {
        setState(true);
        postApi(action.MAKE_PAYMENT)
    }

    return (
        <div className='MakeTransfer-container fadeIn'>
            <h3>Transfer</h3>
            <h5>Please select value to Transfer to BioCatch...</h5>
            <Box width={300} style={{ margin: 'auto' }}>
                <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
            <Button variant="outlined" color="success" onClick={() => makePayment()}>Make Transfer</Button>
            {state && (
                <div>
                    <div className='success-payment'>Payment was Transfer to BioCatch</div>
                    <div className='logout-btn'>
                        <Button variant="outlined" onClick={() => props.setView('homePage')}>Logout</Button>
                    </div>
                </div>
            )}
        </div>
    )
}