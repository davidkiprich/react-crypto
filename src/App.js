import './App.css';
import {useState, useEffect} from 'react';
import Coin from './components/Coin';

function App() {

  const [coins, setCoins] = useState([]); // ide kerülnek be az api hivásnál az adatok
  const [search, setSearch] = useState(''); // imput mezőt tárolja

  const options = {  // apiban van benne ez a kód és onnan másoltam ki mert legenerálja ott nekem 
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'AmU4wFfbamCfBgPmKB3+6kFjNGnKP7a8ZOYP8ueTs4c='
    }
  };

  useEffect(()=>{
   
    fetch('https://openapiv1.coinstats.app/coins', options)
      .then(res=>res.json())
      .then(data => setCoins(data.result))  // azért result mert az apiból az kell nekem mert abban van minden
  }, [])

  // keresés a coinon között filter() metódussal
  // a filer() metódus egy új tömböt hoz létre a tömb elemekből,amelyek megfelelnek a feltételnek
  // a feltétel egy függvény, amely visszatérési értéke true vagy false
  const searchedCoin = coins.filter(coin=>{
    return coin.name.toLowerCase().includes(search.toLowerCase()) // az apiból egy addott valuta egyenlő e azzal amit az inputba beírunk (bitcoin===bitcoin) true vagy false
  })
  console.log(searchedCoin);

  

  return (
    <div className="App">
      <header>
        <h1>React Kriptovaluta kereső</h1>
        <input type="text" placeholder='Bitcoin...' value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }}/>
      </header>

      <div className='container'>
          {
            searchedCoin.map(coin=>{
              return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
            })
          }
      </div>
    </div>
  );
}

export default App;
