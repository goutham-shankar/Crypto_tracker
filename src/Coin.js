import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) => {
  return (
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt={name} />
        <div className="coin-info">
          <h3>{name}</h3>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="coin-data">
        <p className="coin-price">${price.toLocaleString()}</p>
      </div>
      <div className="coin-data show-on-md">
        <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>
          {priceChange < 0 ? (
            <span className="arrow">↓</span>
          ) : (
            <span className="arrow">↑</span>
          )}
          {Math.abs(priceChange).toFixed(2)}%
        </p>
      </div>
      <div className="coin-data show-on-lg">
        <p className="coin-volume">${volume.toLocaleString()}</p>
      </div>
      <div className="coin-data show-on-lg">
        <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;