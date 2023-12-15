import { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FoodData from '../FoodData';
import FoodBox from './FoodBox';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }
handleSearch=(e)=>{
  this.setState({search:e.target.value})
} 
  render() {
    return (
      <>
      
      <Search handleSearch={this.handleSearch} />
        {/* <div id='search'>
          <input type='text'placeholder='Enter Here'onChange={(e) => this.setState({ search: e.target.value })} />
        </div> */}
        {
        
        FoodData.filter((el) => {
          if (this.state.search === '') {
            return el; 
          } else if (
            el.name.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return el; 
          } 
        }).map((el) => {
          return(<div key={el.id}>
            <FoodBox food={el} />

          </div>)
          
          })}
      </>
    );
  }
}

export default App;
