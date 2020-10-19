import React from 'react';
import styles from './App.scss';
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
      appName: 'Your List of Favorite Currencies ',
      list: undefined,
      favorite: [],
    };
  }

  componentDidMount() {

    getData()
      .then(data => {

        const currencyTable = data[0].rates.map((item) => {
          return {...item, currency: this.capitalizeFirstLetter(item.currency), key: item.mid};
        });

        const dataToSearch = currencyTable.map(currency => currency.currency); 

        this.setState({
          ...this.state,
          currencyTable: currencyTable,
          data: dataToSearch,
          favorite: this.state.favorite.concat(currencyTable[3],currencyTable[8]),
        });
      })
      .catch(error => console.error('Error:', error))
      .finally(data => console.log('finally full table response', data));
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  upDateDataArray(){
    let match = [];
    for(let word of this.state.data){
      if(!this.state.favorite.find((val) => val.currency == word ))match.push(word);
    }
    return match;
  }

  searchData(e) {
    const queryData = [];
    if(e.target.value != '') {
      this.upDateDataArray().forEach(function(name) {
        if(name.indexOf(e.target.value)!=-1 || name.toLowerCase().indexOf(e.target.value)!=-1) {
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

  removeCurrency(item) {
    const updatedFavorite = this.state.favorite.filter(to => item !== to);

    this.setState({
      favorite: updatedFavorite,
    });
  }

  removeAllCurrencies(){
    this.setState({
      favorite: [],
    });
  }

  chooseCurrency(value, array) {
    const ItemToAdd = array.filter(item => value == item.currency);
    
    this.setState({
      chosenCurrency: ItemToAdd[0].currency,
      list: undefined,
    });
  }

  addToFavorite(){
    const chosen = this.state.currencyTable.filter(item => this.state.chosenCurrency == item.currency);
    if(!this.state.favorite.includes(chosen[0])) {
      this.setState({
        favorite: this.state.favorite.concat(chosen),
        chosenCurrency: '',
        list: undefined,
      });
    }
  }

  render() {
    const {appName, currencyTable, favorite, list} = this.state;
    return (
      <div className={styles.container}>  
        <h2>{appName}</h2>
        <div className={styles.searchWrapper}>
          <table className={styles.mainTable}>
            <thead>
              <tr><TableHeader/></tr>
            </thead>
            <TableData onclick={this.removeCurrency.bind(this)} 
              currencyTable={favorite} 
              className={styles.switchWrapper} />  
          </table>
          <button 
              className={styles.btnRemoveAll}
              onClick={() => this.removeAllCurrencies()}>Remove All</button>
          <div className={styles.flex}>
            <SearchBar
              className={styles.searchBar}
              chosen={this.state.chosenCurrency} 
              search={this.searchData.bind(this)} />
            {(list) ? 
              <SearchResult 
                className={styles.searchRes}
                onclick={this.chooseCurrency.bind(this)}
                currencyTable={currencyTable} 
                data={list} /> : null  }
            <button 
              className={styles.btnSave}
              onClick={() => this.addToFavorite()}> Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
