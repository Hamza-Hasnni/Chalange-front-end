import { useEffect,useState }from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const Details = () => {
    const [drinkDetails, setDrinkDetails] = useState([])
    const {x} = useParams();
    
    useEffect(() => {
       axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${x}`)
       .then(res=>setDrinkDetails(res.data.drinks[0]))
       .catch(err=>console.log(err))
    }, [x])

    let ingridients=[]
    for(let i=1;i<=15;i++){
      if(drinkDetails[`strIngredient${i}`]!==null){
        (ingridients=[...ingridients,(drinkDetails[`strIngredient${i}`])]);}
      
    }
    return (
        <div>
           <h3>{drinkDetails.strDrink}</h3>
           <ul style={{listStyle:"none"}}>
           {
           ingridients.map(ingridient=><li > {ingridient}</li>)}
           </ul>
        </div>
    )
}

export default Details
