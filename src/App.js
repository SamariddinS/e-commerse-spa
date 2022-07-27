import { useEffect, useState } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  }

  console.log('App rendered');

  return (
    <div className="App">
      <h1 className='app-title'> Monster Rolodex </h1>

      <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='search monsters'/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//   };



//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(user => {
//       this.setState(
//         () => {
//           return {monsters: user};
//         });
//     });
//   }

//   render() {
//     // console.log("render from App.js");
//     const { monsters, searchField } = this.state;
//     const {onSearchChange} = this

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className = "App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox onChangeHandler = {onSearchChange} className = 'search-box-monster' placeholder='Search monsters'/>
//         <CardList monsters = {filteredMonsters}/>
//     </div>
//     );
//   };
// }

export default App;
