import React from 'react'

const Cocktail = ({cocktail}) => {
    return (
        <div >
            <img style={{maxWidth:'200px'}} src={cocktail.strDrinkThumb}/>
            <h3>{cocktail.strDrink}</h3>
        </div>
    )
}

export default Cocktail
