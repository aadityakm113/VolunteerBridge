import React, { useState, useEffect } from 'react';
import Popup from '../popup/Popup';
import './dashboard.css';
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const Dashboard = () => {
    const data=[
        {
          "id": 1,
          "title": "The Beautiful World Movement",
          "description": "A youth based non-profit organization, The Beautiful World Movement (TBWM) was founded in 2016 by Sidharth Bendi. They have since been working with children’s shelter homes & orphanages in not only providing aid but also enriching their lives with experiences that a socially fortunate child would have.",
          "image": "tbwm.jpeg",
          "logo": "tbwmlogo.jpeg"
        },
        {
          "id": 2,
          "title": "GitHub Community at Gitam",
          "description": "The Akshaya Patra Foundation is an independent charitable trust registered under the Indian Trusts Act 1882 (Reg. No. 154). We endeavor to implement the Government of India’s PM POSHAN Initiative (formerly the Mid-Day Meal Scheme) to solve at scale the overarching societal issues of classroom hunger and malnutrition in the country.",
          "image": "ap.jpg",
          "logo": "aplogo.jpg"
        },
        {
          "id": 3,
          "title": "Naandi Foundation",
          "description": "Naandi is an Indian organization, founded in 1998 as a Public Charitable Trust. Naandi is providing services such as elementary education with positive discrimination of girls, safe drinking water and sanitation, large scale cooperative irrigated farming in dry land areas, end-to-end sustainable agriculture in tribal areas, skilling and employment for youth, safe motherhood and early childhood development including tackling of malnutrition amongst children, or any other socio-economic issue that is looking for an efficient solution.",
          "image": "ap.jpg",
          "logo": "naandilogo.png"
        },
        {
          "id": 4,
          "title": "Sphoorti Foundation",
          "description": "SPHOORTI FOUNDATION is a non-profit organization registered under the A.P Registrations Act as a Charitable Trust in October 2005.  Sphoorti is based in Hyderabad, Andhra Pradesh.  In July 2006, sphoorti  established a Children's Home near Cherlapally, Hyderabad.  On day-One, we had three children and two caretakers.",
          "image": "sphoorti.jpg",
          "logo": "sphoortilogo.jpg"
        },
        {
          "id": 5,
          "title": "SEED(support for educational and economic development)",
          "description": "We help underserved students realize their potential and fulfill their dreams of college graduation through a unique, college-prep public boarding school model.",
          "image": "seed.jpg",
          "logo": "seed.jpg"
        },
        {
          "id": 6,
          "title": "HELPING HAND FOUNDATION",
          "description": "Helping Hand Foundation is one of few organizations that’s working tirelessly with weaker sections, in bridging health inequity through its various programs and interventions. It was launched by a like minded team of Hyderabad-based IT professionals with the aim and intent of facilitating accessible and affordable healthcare to the disadvantaged sections of the society.",
          "image": "hh.webp",
          "logo": "hhlogo.jpg"
        },
       
        {
          "id": 7,
          "title": "RAINBOW HOMES FOUNDATION",
          "description": "Rainbow Homes Program aims to protect,care for,educate and empower our most disadvantaged and vulnerable children who live on city streets, orphaned, abandoned. We support these children to access their rights in loving, open and safe residential care homes in government schools and buildings and for them to grow into happy, responsible and caring citizens.",
          "image": "rh.jpeg",
          "logo": "rhlogo.jpeg"
        }
      ]
//   const [data, setData] = useState([]);
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
    <div className='dashboard_container'>
      <div className='nav'>
        <Navbar/>
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

export default Dashboard;