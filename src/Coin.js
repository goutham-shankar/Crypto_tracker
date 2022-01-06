import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,

  marketcap,

  image,
  priceChange
}) => {
  return (
    <div className='container coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1 class='h1'>{name}</h1>

        </div>
        <div className='coin-data'>
          <p className='coin-price'>💲{price} &nbsp; &nbsp; &nbsp;&nbsp; </p>


          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(1)}%😒</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(1)}%🚀</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;