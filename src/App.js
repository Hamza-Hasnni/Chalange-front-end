import axios from 'axios'
import React,{useEffect,useState} from 'react'
import './App.css';
import Search from './component/Search';
import CocktailList from './component/CocktailList';
import {Switch , Route} from "react-router-dom"
import Details from './component/Details';


function App() {
  const [fila, setFila] = useState("")
  console.log(fila)
  const [cocktails, setCocktails] = useState([])
    useEffect(() => {
       axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${fila}`)
       .then(res=>setCocktails(res.data.drinks))
       .catch(err=>console.log(err))
    }, [fila])
    console.log(cocktails)
  return (
    <div className="App">
      <Search setFila={setFila}/>
      <Switch>
        <Route exact path="/" render={(props)=>(<CocktailList {...props} cocktails={cocktails} />)
          
        } />
        <Route path="/Details/:x" component={Details} />
      
      </Switch>
    </div>
  );
}


export default App;
