import React from 'react';
import './App.css';
import { getData } from '../data/fetchData.js';
import TableData from '../Table/TableData';
import TableHeader from '../Table/TableHeader';

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

  removeCurrency(item){
    const newArray = this.state.currencyTable.filter(to => item !== to);
    console.log('newArray', newArray);
    this.setState({
      currencyTable: newArray,
    });
  }

  render() {
    console.log(this.state.currencyTable);
    return (
      <div>  
        <h2>Title</h2>

        <table>
          <tbody>
            <tr><TableHeader/></tr>
            <TableData onclick={this.removeCurrency.bind(this)} currencyTable={this.state.currencyTable} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
