import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        setCoins(res.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <h1 className='coin-text'>Crypto Tracker</h1>
      <div className='coin-search'>
        <h2 className='coin-text'>Search a currency</h2>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search🔍'
          />
        </form>
      </div>
      
      {loading ? (
        <p className='loading-text'>Loading data...</p>
      ) : error ? (
        <p className='error-text'>{error}</p>
      ) : (
        filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              volume={coin.total_volume}
              marketcap={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
