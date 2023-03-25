import React, { useState, useEffect } from 'react';
import './GoldCardForm.css';
import smallCreditCard from '../../../utils/assets/smallCreditCard.png';
import GoldNew from '../../../utils/assets/GoldNew.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { changeContext } from '../../../utils/sdk';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import ConfirmationView from '../../ConfirmationView/ConfirmationView';


export default function GoldCardForm(props) {
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    changeContext('AO-Gold-Card-Form-Page');
  });

  function renderInputWithTopLable(text) {
    return (
      <div className='InputWithLable-container'>
        <span>{text}</span>
        <TextField placeholder={text} variant="standard" />
      </div>
    )
  }

  return (
    <div className='GoldCardForm-Container fadeIn'>
      <div className='gold-card-main-content'>

        <div className='form-container'>
          <div className='back-button' onClick={() => props.setView('Featured Credit Cards')}>
            <ArrowBackIcon />
          </div>
          <div className='form-header'>
            <img src={smallCreditCard}
              className='smallCreditCard-img'
              alt='Gold-Credit-Card'>
            </img>
            <div>Apply For Gold Card</div>
          </div>
          <div className='form-content'>
            {isSubmit ? <ConfirmationView /> :
              <FormGroup>
                {renderInputWithTopLable('Full Name')}
                {renderInputWithTopLable('Name On Card')}
                {renderInputWithTopLable('Email Address')}
                {renderInputWithTopLable('Date Of Birth')}
                {renderInputWithTopLable('Phone Number')}
                {renderInputWithTopLable('Home Address')}
                {renderInputWithTopLable('Id Number')}
                {renderInputWithTopLable('Total Annual Income')}
                {renderInputWithTopLable('Income Source')}
                <div>
                  <Checkbox onClick={() => setIsAgree(!isAgree)} />
                  Agree to Terms and Conditions
                </div>
                {isAgree ?
                  <Button variant="contained" onClick={() => setIsSubmit(true)}>Submit</Button> :
                  <Button variant="contained" disabled>Submit</Button>}
              </FormGroup>
            }
          </div>
        </div>
        <div className='right-column'>
          <img src={GoldNew} className='creditCardImg gold' alt='Gold-Credit-Card'></img>
          <div style={{ textAlign: 'left' }}>
            <h2>DemoBank Gold</h2>
            <span style={{ fontSize: '0.9rem' }}>
              A simple everyday credit card with 0$ annual fee in the first year and complimentary insurance.
            </span>
            <hr style={{ width: '50px', marginLeft: 0 }} />
            <h2>First Year Benefits</h2>
            <h2>0$ Annual Fee</h2>
            <h2>Complimentary Insurance</h2>
            <hr style={{ width: '', marginLeft: 0 }} />
            <span style={{ fontSize: '0.7rem' }}>
              Welcome offer not available to applicants who have or
              have had this Card. We may also consider the number
              of BioBank Cards you have opened and closed as well
              as other factors in making a decision on your welcome
              offer eligibility.
            </span>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

