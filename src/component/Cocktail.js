import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
    return (
        <div >
            <Link to={`/Details/${cocktail.idDrink}`}>
            <img style={{maxWidth:'200px'}} src={cocktail.strDrinkThumb}/>
            </Link>
            <h3>{cocktail.strDrink}</h3>
        </div>
    )
}

export default Cocktail
