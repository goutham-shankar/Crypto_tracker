import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <div className="header-content">
          <h1>Crypto<span>Tracker</span></h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      
      <div className="container">
        <div className="search-container">
          <div className="search-wrapper">
            <input
              className="search-input"
              type="text"
              onChange={handleChange}
              placeholder="Search by name or symbol"
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>
        
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Loading cryptocurrencies...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="coin-header">
              <p className="coin-header-name">Cryptocurrency</p>
              <p className="coin-header-data">Price</p>
              <p className="coin-header-data show-on-md">24h Change</p>
              <p className="coin-header-data show-on-lg">Volume</p>
              <p className="coin-header-data show-on-lg">Market Cap</p>
            </div>
            
            <div className="coins-container">
              {filteredCoins.length > 0 ? (
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
              ) : (
                <div className="no-results">
                  <p>No cryptocurrencies found matching "{search}"</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      
      <footer>
        <p>Data provided by CoinGecko API</p>
        <p>&copy; {new Date().getFullYear()} CryptoTracker - Built by Goutham Sankar</p>
        <div className="social-links">
          <a href="https://github.com/goutham-shankar" target="_blank" rel="noopener noreferrer">
            <span className="social-icon github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;