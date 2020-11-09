import React from 'react';
import GroceryList from './GroceryList.jsx';
import AddGroceries from './AddGroceries.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [],
    }
    this.addGrocery = this.addGrocery.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems()
  }

  getItems() {
    axios.get('http://127.0.0.1:8000/list/')
      .then(res => { 
        const data = res.data;
        this.setState({ 
          groceries : data
        }); 
      })
      .catch(err => console.log(err));
  }

  addGrocery(input) {
    axios.post('http://127.0.0.1:8000/add/', input)
      .then(res => {
        console.log('Post request sent!');
        this.getItems();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <AddGroceries addGrocery={this.addGrocery} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    )
  }
}

export default App;