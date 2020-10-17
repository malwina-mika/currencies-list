import React from 'react';
import './App.css';
import { getData } from '../data/fetchData.js';
import TableData from '../Table/TableData';
import TableHeader from '../Table/TableHeader';
import SearchBar from '../Search/SearchBar';
import SearchResult from '../Search/SearchResult';

class App extends React.Component {  
    
  constructor(props) {
    super(props);
    this.state = {
      currencyTable: [],
      data: [],
      chosenCurrency: '',
      appName: 'React Search Bar',
      list: undefined,
    };
  }

  componentDidMount() {

    getData()
      .then(data => {
        const currencyTable = data[0].rates.map(item => item);
        const dataToSearch = data[0].rates.map(currency => currency.currency);  
        this.setState({
          ...this.state,
          currencyTable: currencyTable,
          data: dataToSearch,
        });
      })
      .catch(error => console.error('Error:', error))
      .finally(data => console.log('finally full table response', data));
  }

  searchData(e) {
    const queryData = [];
    if(e.target.value != '') {
      this.state.data.forEach(function(name) {
        if(name.toLowerCase().indexOf(e.target.value)!=-1) {
          if(queryData.length < 10) {
            queryData.push(name);
          }
        }
      });
    }
    this.setState({
      list: queryData,
      chosenCurrency: e.target.value,
    });
  }

  removeCurrency(item){
    const newArray = this.state.currencyTable.filter(to => item !== to);
    console.log('newArray', newArray);
    this.setState({
      currencyTable: newArray,
    });
  }

  addCurrency(value, array){

    const ItemToAdd = array.filter(item => value == item.currency);
    
    this.setState({
      chosenCurrency: ItemToAdd[0].currency,
      list: undefined,
    });
  }

  render() {
    console.log(this.state.currencyTable);
    const {appName, currencyTable, list} = this.state;
    return (
      <div>  
        <div>
          <h2>{appName}</h2>
          <SearchBar
            chosen={this.state.chosenCurrency} 
            search={this.searchData.bind(this)} />
          {(list) ? 
            <SearchResult 
              onclick={this.addCurrency.bind(this)}
              currencyTable={currencyTable} data={list} /> : null  }
        </div>

        <table>
          <tbody>
            <tr><TableHeader/></tr>
            <TableData onclick={this.removeCurrency.bind(this)} 
              currencyTable={currencyTable} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
