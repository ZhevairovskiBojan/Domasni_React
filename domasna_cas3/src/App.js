  // Da napravime komponenta vo koja ke prikazuvame komentari, neka sekoj komentar ima id, author, text.
  // neka listata so komentari ja imate vo app.js i pratite preku props vo kreiranata komponenta
  // tamu da gi prikazeme informaciite
  // neka bidat vo tabela
  // pokraj ova imate nekoe kopce LIKE sto vo konzola ke pecati +1

 

import './App.css';
import React from 'react';
import Comment from "./components/Comment"; 
import SportClass from './components/SportClass';

function App() {
  let comment = [
    { id: "1", author: "Bojan", text: "Comment." },
    { id: "2", author: "Mirko", text: "Comment." },
    { id: "3", author: "Goce", text: "Comment." },
    { id: "4", author: "Ana", text: "Comment." },
    { id: "5", author: "Keti", text: "Comment." },
  ];

  let player = {
    name: "Bojan",
    lastName: "Zhevairovski",
    score: 1000,
  };

  let player2 = {
    name: "Mirko",
    lastName: "Mirkovski",
    score: 2000,
  };

  let player3 = {
    name: "Ana",
    lastName: "Anovska",
    score: 3000,
  };

  return (
    <div className="App">
      <h1> Players results </h1>
     
      <Comment comment={comment} /> 
      <SportClass player={player} />
      <SportClass player={player2} />
      <SportClass player={player3} />

    </div>
  );
}
export default App;
