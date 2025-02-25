import React from "react";
import "./CryptoList.css";

function CryptoList({ cryptos, onSelectCrypto }) { 
  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (// cryptos.map cryptos wali array me se her entry k leay aik crypto-item bnaye ga jo as a prop agay use hoga  
        <div
          key={crypto.id}
          className="crypto-item"
          onClick={() => onSelectCrypto(crypto)}//onSelectCrypto aik callback functon hy: user jub cryptocurrency ko click kray ga to  ye function aik link bna dega app.js k sath cryptolist.js ka aor crypto.map ko run kray ga 
        >
          <img src={crypto.image} alt={crypto.name} />
          <div>
            <h3>{crypto.name}</h3>
            <p>Current Price: ${crypto.current_price.toFixed(2)}</p>
            <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>//.toLocaleString() use hua hy takay jo value display ho usmay comas hon 
    //.toFixed(2) isleay use hua hy takay decimal k baad 2 digits he ayen hamesha 
  );
}

export default CryptoList;
