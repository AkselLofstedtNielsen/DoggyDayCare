

import React, { useState, useEffect } from 'react';

const Catalog =(props) => {
const [dogs, setDogs] = useState([]);

useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('dogCatalog'));
    if(items){
        setDogs(items);
    }
},[]);
const goHome = () => {
    props.setPage('welcome');
};
const handleClick = (index) => {
    props.setDog(dogs[index]);
    props.setPage('dogDetails')
  };

  return (
    <div className='catalog-container'>
    <button onClick={goHome}>Home</button>
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <button onClick={() => {handleClick(index)}}>
            <img src={dog.img}></img>
            <p>{dog.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
