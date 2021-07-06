
import Cocktail from './Cocktail'
const CocktailList = ({cocktails}) => {
    
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            {cocktails===null?<h3>Cocktails Not Found</h3>:
            cocktails===[]?<h1>loading...</h1>:
            cocktails.map(cocktail=> <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>)
             }
        </div>
    )
}

export default CocktailList
