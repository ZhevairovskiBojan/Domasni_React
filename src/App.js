//DOMASNA:
  // Da kreirame i treta komponenta kade kje imame nekoj tekst
  // koj kje bide eve slika od moeto omileno hoby
  // da ima slika od hobito
  // da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  // i normalno slikata da ni bide vo razmer i toj css da bide
  // importiran od nekoj nadvoresen css file
  // koga kje pomineme so mouse-ot vrz slikata da ispecatime vo
  // konzola nekoj tekst (hello there!!!)

  import React from 'react';
  import Hobbies from './components/Hobbies';
  import FavoriteHobby from './components/FavoriteHobby'; 
  import HobbyImage from './components/HobbyImage'; 
  
 
  function App() {
    return (
      <div>
        <Hobbies />
        <FavoriteHobby />
        <HobbyImage />
      </div>
    );
  }
  
  export default App;
  
  
