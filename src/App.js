import logo from './logo.svg';
import { Users } from "./users.js"
import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import image from './joker.png';


// console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email", "gender"]

  const search = (data) => {
    return data.filter(
      (item) => 
      keys.some(key => item[key].toLowerCase().includes(query)))

      // Création de l'élément img
var image = document.createElement('img');

// Définition de l'attribut src avec le chemin de l'image
image.src = 'joker.png';

// Ajout de l'élément img au document (par exemple, au corps du document)
document.body.appendChild(image);

  }
  return (
    <div className="App">
      <input type="text"
        placeholder="Search..."
        className="search"
        onChange={e=> setQuery(e.target.value)}
      />
      <img src={image} className="App-logo" alt="logo" />
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