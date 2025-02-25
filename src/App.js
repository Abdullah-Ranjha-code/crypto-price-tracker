import React, { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
import CryptoDetails from "./components/CryptoDetails";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [cryptos, setCryptos] = useState([]); // cryptos k andar API se jo cryptocurrencies ki details feth hongi woh store hongi...
  const [filteredCryptos, setFilteredCryptos] = useState([]); // filterCryptos me jo search bar me crypto currency search kray ga user, sirf wohi store hogi... aor sirf wohi crypto currency show hogi user ko 
  const [selectedCrypto, setSelectedCrypto] = useState(null); // user jo cryptocurrency select kray ga list me se uska data store hoga selectedCrypto me 
 
  useEffect(() => {//useEffect sirf aik baar run hoga kyu k iska dusra element empty array hy. aor ye API me se cryptocurrencies ka data fetch karay ga 
    fetch(//fetch() API me se cryptocurrencies ka live data fetch kry ga 
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => {// then jo hy woh data ko as a prop bhejay ga setCryptos me aor setFilteredCryptos me 
        setCryptos(data); //data jo fetch hua hy API se uskay according setCryptos, cryptos ki state ko change krday ga 
        setFilteredCryptos(data); // setFilteredCryptos, data k according filteredCryptos me jo list hy usay change kray ga/ initialize krdayga 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 
  
  const handleSearch = (query) => {// query (user jo input search bar me dega) uskay hisab se handleSearch cryptos list ko filtar kray ga, aor filteredCryptos ko update krday ga takay sirf wohi currency ka data show ho jo user ny search kia hy 
    const results = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase())
    );
    //.toLowerCase() isleay use hua hy takay jo name hy woh lower case me save ho jiska faida ye hoga k ager user 'bitcoin' ya 'BITCOIN' likhay ga to wo 'Bitcoin' he save hoga/ raffer kray ga 
   // .includes(query.toLowerCase()) isleay use kia hy takay ager user half lafz bhe likhta hy to woh puray word ko reffer kray like ager user sirf 'bit' likhta hy to woh 'bitcoin' ko he reffer kray ga 
    setFilteredCryptos(results);
  };
   // aor hum handleSearch ko onSearch me bhejain gy prop k tor per 

  return (
    <div className="app">
      <h1>Crypto Tracker</h1>
      {!selectedCrypto ? (// yahan ager to ager condition false hy to user ko search bar aor crypto currencies ki list show hogi. aor ager true hy yani user kuch select krta hy to jo currency select hui hy uski details user ko show hongi 
        <>
          <SearchBar onSearch={handleSearch} />
          <CryptoList
            cryptos={filteredCryptos}
            onSelectCrypto={(crypto) => setSelectedCrypto(crypto)}
          />
        </>
      ) : (
        <CryptoDetails
          crypto={selectedCrypto}
          onBack={() => setSelectedCrypto(null)}
        />
      )} 
    </div>
  );
}

export default App;
// ab hum cryptos aor onSelectCrypto ko as a prop cryptolist.js me bhejaain gy