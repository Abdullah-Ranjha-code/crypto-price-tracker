import React from "react";
import "./CryptoDetails.css";

function CryptoDetails({ crypto, onBack }) {// app.js se cryptos hum yahan as a props use kray gy... onBack aik call back function hy jo app.js me selectedCrypto ko null per reset krday ga 
  return (
    <div className="crypto-details">
      <button onClick={onBack}>Back</button>
      <h2>{crypto.name}</h2>
      <p>Symbol: {crypto.symbol.toUpperCase()}</p>
      <p>Current Price: ${crypto.current_price.toFixed(2)}</p>
      <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
      <p>24h High: ${crypto.high_24h.toFixed(2)}</p>
      <p>24h Low: ${crypto.low_24h.toFixed(2)}</p>
      <p>Price Change (24h): {crypto.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  );// yahan jo back button hy usay click krny per onBack walla function call hoga aor user wapis home page/ list per chla jaye ga 
}//.toUpperCase() isleay use kia hy kyu k cryptocurrency me symbols uppercase me use hotay hain jesay  BTC, ETH waghera 
//.toFixed(2) isleay use hua hy takay decimal k baad 2 digits he ayen hamesha 
//.toLocaleString() use hua hy takay jo value display ho usmay comas hon 
export default CryptoDetails;
