import React, { useState, useEffect } from 'react';
import './AO.css';
import GoldNew from '../../utils/assets/GoldNew.png';
import PlatinumNew from '../../utils/assets/PlatinumNew.png';
import GoldCardForm from './Form/GoldCardForm';
import PlatinumCardForm from './Form/PlatinumCardForm';
import { changeContext } from '../../utils/sdk';

export default function AO(props) {

  useEffect(() => {
    changeContext('AO-Page');
  });

  const [view, setView] = useState('Featured Credit Cards');

  const featuredCreditCards = () => {
    return (
      <div className='FeaturedCreditCards-Container fadeIn'>
        <div>
          <h3>Featured Credit Cards</h3>
          <h5>Choose a credit card that works for you</h5>
        </div>
        <div className='creditCardsImg-Container'>
          <div className='Card-Container'>
            <img onClick={() => setView('GoldCardForm')}
              src={GoldNew}
              className='creditCardImg'
              alt='Gold-Credit-Card'></img>
            <div>
              <h3>DemoBank Gold</h3>
              <p className='innerCreditCard-Paragraph'>
                A simple everyday credit card with 0$ annual fee
                in the first year.
              </p>
            </div>
          </div>
          <div className='Card-Container'>
            <img
              onClick={() => setView('PlatinumCardForm')}
              src={PlatinumNew}
              className='creditCardImg'
              alt='PlatinumNew-Credit-Card'>
            </img>
            <div>
              <h3>DemoBank Platinum</h3>
              <p className='innerCreditCard-Paragraph'>
                A simple everyday credit card with a low ongoing
                annual fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const displayView = () => {
    switch (view) {
      case 'PlatinumCardForm':
        return <PlatinumCardForm setView={setView} />
      case 'GoldCardForm':
        return <GoldCardForm setView={setView} />
      default:
        return featuredCreditCards()
    }
  }

  return (
    displayView()
  );
}