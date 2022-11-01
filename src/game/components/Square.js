import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => (

  <button className="square" type="submit" onClick={onClick}>{value}</button>

);

export default Square;
