import React from 'react';
import ReactDOM from 'react-dom';


class AddGrocery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      quantity: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGrocery(this.state);
    this.setState({
      item: '',
      quantity: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleChange} />
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit" >Add Grocery</button>
      </form>
    )
  }
}

export default AddGrocery;