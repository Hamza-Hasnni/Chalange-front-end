import logo from './logo.svg';
import './App.css';
import Search from './component/Search';
import CocktailList from './component/CocktailList';
import React ,{useState} from 'react'



function App() {
  const [fila, setFila] = useState("")
  
  return (
    <div className="App">
      <Search setFila={setFila}/>
      <CocktailList fila={fila} />
    </div>
  );
}

export default App;
