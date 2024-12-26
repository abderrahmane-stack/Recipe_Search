import { useState } from 'react';
import './App.css';
import Recipegrid from './compenante/Recipegrid';
import Search from './compenante/Search';
function App() {
    const [ingredient, setIngredient]=useState('');
  return (
    <div class='container' >
      <h1>SEARCH MEAL </h1>
    
         <Search setIngredient={setIngredient} />
         <Recipegrid ingredient={ingredient} />
    </div>
  );
}

export default App;
