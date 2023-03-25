import React, { useEffect, useState, useCallback } from 'react';
import './accountOverview.css'
import Button from '@mui/material/Button';
import { changeContext } from '../../utils/sdk';
import MakePayments from '../makePayments/makePayments';
import MakeTransfer from '../makeTransfer/makeTransfer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';


export default function AccountOverview(props) {
    const [view, setView] = useState('default');

    const makePaymentBtn = () => setView('Make_A_Payments');

    const mainSwitch = useCallback(() => {
        switch (view) {
            case 'Make_A_Payments':
                return <MakePayments setView={setView} />
            default:
                return <>Hello, please select action to start.</>
        }
    })

    useEffect(() => {
        changeContext('Account-Overview-Page')
    }, [mainSwitch]);
    console.log(props)
    return (
        <div className='AccountOverview-container fadeIn' >
            <div className='AccountOverview-header'>
                <div className='AccountOverview-header-left'>
                    {props.userData.userName.length > 1 ?
                        `Welcome${' ' + props.userData.userName}` :
                        'Welcome'}
                </div>
                <div className='AccountOverview-header-right'>
                    <div>
                        <AccountBalanceIcon style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className='AccountOver-header-balance'>
                        <div>
                            $7,500.00
                        </div>
                        <div>
                            Current balance
                        </div>
                    </div>
                </div>
            </div>
            <div className='AccountOverview-content'>
                <div className='AccountOverview-content-left'>
                    <Button
                        data-automation-id="open_make_payment_view"
                        id="open_payment_page"
                        variant="outlined"
                        className='user-action-btn'
                        onClick={() => makePaymentBtn()}>
                        <PaymentsIcon />
                        Make a Payments
                    </Button>
                </div>
                <div className='AccountOverview-content-right'>
                    {mainSwitch()}
                </div>
            </div>
        </div >
    )
}
