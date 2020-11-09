import React from 'react';
import ReactDOM from 'react-dom';

const GroceryListEntry = (props) => {
  return (
  <li>
    <span>{props.grocery.item}: {props.grocery.quantity}</span>
  </li>
  )
}

export default GroceryListEntry;