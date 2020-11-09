import React from 'react';
import ReactDOM from 'react-dom';
import GroceryListEntry from './GroceryListEntry.jsx'

const GroceryList = (props) => {
  return (
  <ul>
    {props.groceries.map((item, i) => {
      return <GroceryListEntry key={i} grocery={item} />
    })}
  </ul>
  )
}

export default GroceryList;