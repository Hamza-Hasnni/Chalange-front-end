import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Cocktail from './Cocktail'
const CocktailList = ({fila}) => {
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
       axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${fila}`)
       .then(res=>setCocktails(res.data.drinks))
       .catch(err=>console.log(err))
    }, [fila])
    console.log(cocktails)
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            {cocktails==null?<h3>Cocktails Not Found</h3>:cocktails==[]?<h1>loading...</h1>:cocktails.map(cocktail=> <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>)
             }
        </div>
    )
}

export default CocktailList
