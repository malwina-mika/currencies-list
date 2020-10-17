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
      appName: 'Your List of Favorite Currency ',
      list: undefined,
      favorite: [],
    };
  }

  componentDidMount() {

    getData()
      .then(data => {

        const currencyTable = data[0].rates.map((item) => {
          return {...item, key: item.mid};
        });

        const dataToSearch = currencyTable.map(currency => currency.currency); 

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

  removeCurrency(item) {
    const updatedFavorite = this.state.favorite.filter(to => item !== to);

    this.setState({
      favorite: updatedFavorite,
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
    console.log(this.state.currencyTable);
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
              onClick={this.addToFavorite.bind(this)}> Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
