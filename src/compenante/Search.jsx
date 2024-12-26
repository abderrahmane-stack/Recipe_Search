import React ,{useState} from 'react';

const Search = ({setIngredient}) => {
  const [inputValue, setInputValue]=useState('');
  function handaleSearch(){
    setIngredient(inputValue);

  }
  return (
    <div class='search-bar '>
      <input 
      type="text"
       value={inputValue}  
       placeholder='searching for different ingredients like egg, fish, or bread'
       onChange={(e)=>setInputValue(e.target.value)}
       />
      <button onClick={handaleSearch} >search</button>
    </div>
  );
}

export default Search;
