import React from "react";
import "./popup.css";

const Popup = ({ onClose, data }) => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <div>
            <img className="ev" src={`/assets/${data.image}`} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;