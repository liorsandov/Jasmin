import React, { useState, useEffect } from 'react';
import './PlatinumCardForm.css';
import smallCreditCard from '../../../utils/assets/smallCreditCard.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import PlatinumNew from '../../../utils/assets/PlatinumNew.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { changeContext } from '../../../utils/sdk';
import FormGroup from '@mui/material/FormGroup';
import ConfirmationView from '../../ConfirmationView/ConfirmationView';


export default function PlatinumCardForm(props) {
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [displayImage, setDisplayImage] = useState(false)

  useEffect(() => {
    changeContext('AO-Platinum-Card-Form-Page');
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
    <div className='PlatinumCardForm-Container fadeIn'>
      <div className='platinum-card-main-content'>
        <div className='form-container'>
          <div className='back-button' onClick={() => props.setView('Featured Credit Cards')}>
            <ArrowBackIcon />
          </div>
          <div className='form-header'>
            <img src={smallCreditCard}
              className='smallCreditCard-img'
              alt='Platinum-Credit-Card'>
            </img>
            <div>Apply For Platinum Card</div>
          </div>
          <div className='form-content'>
            {isSubmit ? <ConfirmationView /> :
              <FormGroup>
                {renderInputWithTopLable('Full Name')}
                {renderInputWithTopLable('Name On Card')}
                {renderInputWithTopLable('Email Address')}
                {renderInputWithTopLable('Home Address')}
                {renderInputWithTopLable('Id Number')}
                {renderInputWithTopLable('Total Annual Income')}
                <div>
                  <Checkbox onClick={() => setIsAgree(!isAgree)} />
                  Agree to Terms and Conditions
                </div>
                {isAgree ?
                  <Button variant="contained" onClick={() => setIsSubmit(true)}>Submit</Button> :
                  <Button variant="contained" disabled>Submit</Button>}
              </FormGroup>}
          </div>
        </div>
        <div className='right-column'>
          <img src={PlatinumNew} className='creditCardImg' alt='Platinum-Credit-Card'></img>
          <div style={{ textAlign: 'left' }}>
            <h2>DemoBank Platinum</h2>
            <span style={{ fontSize: '0.9rem' }}>
              A simple everyday credit card with a low
              ongoing annual fee.
            </span>
            <hr style={{ width: '50px', marginLeft: 0 }} />
            <h2>Card Benefits</h2>
            <h2>Low ongoing Annual Fee*</h2>
            <h2>affordable card for everyday use</h2>
            <hr style={{ width: '', marginLeft: 0 }} />
            <span style={{ fontSize: '0.7rem' }}>
              Your annual fee will be determined by various
              risk factors, credit score, vocation and spending
              habits. DemoBank will evaluate those and offer the
              lowest card fee available.
            </span>
          </div>
          <div>
            <div>
              <button onClick={() => setDisplayImage(!displayImage)}>
                Display Images ?
              </button>
            </div>
            {displayImage ? (
              <div>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_1400m_africa_n_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://effigis.com/wp-content/uploads/2014/10/Images-Satellites-Satellite-images-Samples-WorldView-2-EN.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://sample-videos.com/img/Sample-jpg-image-30mb.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://sample-videos.com/img/Sample-jpg-image-20mb.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://sample-videos.com/img/Sample-jpg-image-15mb.jpeg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://sample-videos.com/img/Sample-jpg-image-10mb.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://effigis.com/wp-content/uploads/2014/10/Images-Satellites-Satellite-images-Samples-QuickBird-EN.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://effigis.com/wp-content/uploads/2015/05/Image-Satellite-Images-Samples-St-Benoit-du-Lac-Quebec-2014-09-04-SPOT-6-EN.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://www.bu.edu/tech/files/images/sample.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://effigis.com/wp-content/uploads/2014/10/Images-Satellites-Satellite-images-Samples-RapidEye-EN.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://budgetstockphoto.com/samples/pics/carspeed.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://effigis.com/wp-content/uploads/2014/10/Images-Satellites-Satellite-images-Samples-SPOT-5-EN.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/09/CM_MagazineHeader_10MostSpokenLanguages.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://www.sefram.com/images/products/photos/hi_res/9835.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://budgetstockphoto.com/samples/pics/rainbow.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://budgetstockphoto.com/samples/pics/dataconnectioncut1857.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://images.unsplash.com/photo-1610448720983-959b147f1ac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_1400m_africa_m_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_asia_southeast_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_central_america_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_canada_s_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
                <img src='https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_464m_caribbean_labeled.png'
                  className='creditCardImg'
                  alt='Platinum-Credit-Card'></img>
              </div>) : <></>
            }
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

