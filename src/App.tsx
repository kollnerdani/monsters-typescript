import { useState, useEffect, ChangeEvent } from 'react';
import MonsterList from "./components/monster_list";
import SearchBar from "./components/search_bar";
import { getData } from "./utils/data.utils";
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect( () =>{
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    };

    fetchUsers().then();
  }, [])

  useEffect( () =>{
    const newFilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  const onSearch = (event: ChangeEvent<HTMLInputElement>): void =>{
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
      <div className="App">
        <h1 className="app-title">Monsters</h1>
        <SearchBar onChangeHandler = {onSearch} placeHolder='search' className='monsters-search-box'/>
        <MonsterList  monsters= {filteredMonsters} />
      </div>
  )
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//         monsters:[],
//         searchField: ''
//     }
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response => response.json()))
//         .then((users) =>{
//                this.setState(
//                    () => {
//                        return { monsters: users }
//                    }
//                )
//         }
//         )
//   }
//     onSearch = (event) =>{
//       const searchField = event.target.value.toLowerCase()
//       this.setState(
//           () =>{
//               return { searchField }
//           }
//       )
//   }
//
//   render (){
//       const { monsters, searchField } = this.state
//       const { onSearch } = this
//       const filteredMonsters = monsters.filter((monster) =>{
//           return monster.name.toLowerCase().includes(searchField)
//       })
//
//       return (
//         <div className="App">
//             <h1 className="app-title">Monsters</h1>
//             <SearchBar onChangeHandler = {onSearch} placeholder='search' className='monsters-search-box'/>
//             <MonsterList  monsters= {filteredMonsters} />
//        </div>
//    );
//  }
// }

export default App;