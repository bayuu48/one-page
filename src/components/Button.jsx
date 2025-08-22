// src/components/Button.jsx

import React from 'react';
import './Button.css'; // Kita akan buat file CSS ini nanti

function Button({ text, onClick }) { //Component  Button dan  Properti text,onClick
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
