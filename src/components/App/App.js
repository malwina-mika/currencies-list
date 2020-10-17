import React from 'react';
import './App.css';
import { getData } from '../data/fetchData.js';

class App extends React.Component {  
    
  constructor(props) {
    super(props);
    this.state = {
      currencyTable: [],
    };
  }

  componentDidMount() {

    getData()
      .then(data => {
        const currencyTable = data[0].rates.map(item => item);
        this.setState({
          ...this.state,
          currencyTable: currencyTable,
        });
      })
      .catch(error => console.error('Error:', error))
      .finally(data => console.log('finally full table response', data));
  }

  render() {
    console.log(this.state.currencyTable);
    return (
      <div>  
        <h2>Title</h2>
      </div>
    );
  }
}

export default App;
