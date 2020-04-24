import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/Card-List/cardList-component.jsx';
import {SearchBox} from './components/SearchBox/searchbox.component.jsx';
class App extends Component{
 constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
 } 

 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(users => this.setState({monsters:users}))
 }
render() {
  const {monsters,searchField} = this.state;
  const filteredMonsters=monsters.filter(monsters=>monsters.username.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1 className="Header">Monsters</h1>
      <SearchBox placeholder="Search For Monsters" handleChange={e=>this.setState({searchField:e.target.value})}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
