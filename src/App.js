//import logo from './logo.svg';
import { Users } from "./users.js"
import React, { useState } from 'react';
import './App.css';
import Table from './Table';


// console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  const search = (data) => {
    return data.filter(
      (item) => 
      keys.some(key => item[key].toLowerCase().includes(query)))
  }
  return (
    <div className="App">
      <input type="text"
        placeholder="name,com,unc,rare,leg,bp"
        className="search"
        onChange={e=> setQuery(e.target.value)}
        />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;




















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }