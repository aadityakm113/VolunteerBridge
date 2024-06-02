import React from 'react';
import './landing.css';
import Navbar from '../navbar/Navbar';

const Landing = () => {
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
    "title": "Akshaya Patra",
    "description": "The Akshaya Patra Foundation is an independent charitable trust registered under the Indian Trusts Act 1882 (Reg. No. 154). We endeavor to implement the Government of India’s PM POSHAN Initiative (formerly the Mid-Day Meal Scheme) to solve at scale the overarching societal issues of classroom hunger and malnutrition in the country.",
    "image": "ap.jpg",
    "logo": "aplogo.jpg"
  },
  {
    "id": 3,
    "title": "Naandi Foundation",
    "description": "Naandi is an Indian organization, founded in 1998 as a Public Charitable Trust. Naandi is providing services such as elementary education with positive discrimination of girls, safe drinking water and sanitation, large scale cooperative irrigated farming in dry land areas, end-to-end sustainable agriculture in tribal areas, skilling and employment for youth, safe motherhood and early childhood development including tackling of malnutrition amongst children, or any other socio-economic issue that is looking for an efficient solution.",
    "image": "naan.jpeg",
    "logo": "naandilogo.png"
  }];


  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
  };

  return (
    <div className="landing_container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="hands">
        <a href="/">
          <img src="./assets/images.jpeg" alt="Hands" />
        </a>
      </div>
      {/* <div className="join">
        <p>
          We are building the bridge to the gap between people who need help and to
          the ones who can contribute. Join us.
        </p>
      </div> */}
      <div className="card_container">
        {data.map((card, idx) => (
          <div key={idx} className="card" onClick={() => handleCardClick(card)}>
            <img src={`/assets/${card.image}`} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;