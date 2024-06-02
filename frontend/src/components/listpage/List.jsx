import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./list.css"
import Navbar from '../navbar/Nav';

const List = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/ngo")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  }
  return (
    <div className='list_container'>
      <div className='nav'>
        <Navbar />
      </div>
      {data.map((card, idx) => (
        <div key={idx} className='card' onClick={() => handleCardClick(card)}>
          <img src={`/assets/${card.logo}`} alt={card.title}/>
          <h2>{card.title}</h2>
        </div>
      ))}
      {showModal && (
        <Popup onClose={() => setShowModal(false)} data={selectedCard}/>
      )}
    </div>
  )
}

export default List