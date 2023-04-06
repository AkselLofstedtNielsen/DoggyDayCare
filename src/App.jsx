// App.js

import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import DogDetails from './components/DogDetails';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState('welcome');
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126')
      .then(response => response.json())
      .then(data => {
        setItems(data.record);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(()=>{
    localStorage.setItem('dogCatalog', JSON.stringify(items));
  },[items]);

 
  const pages = {
    welcome: <Welcome setPage={setPage} />,
    catalog: <Catalog setPage={setPage} setDog={setDog}/>,
    dogDetails: <DogDetails setPage={setPage} dog={dog}/>
  };

  return pages[page];
}

export default App;
