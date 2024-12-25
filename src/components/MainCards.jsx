import React from 'react'
import { NavLink } from 'react-router-dom'

const MainCards = ({details}) => {
    console.log(details)
  return (
    <div className='meals'>
        {!details ? 'no data found' : 
        details.map((currItem) =>{
            return (
            <div className='mealImg'>
                <img src={currItem.strMealThumb} alt="" />
                <p>{currItem.strMeal}</p>
                <NavLink to={`/${currItem.idMeal}`}><button>Recipe</button></NavLink>
            </div>
            )
        })
        }
    </div>
  )
}

export default MainCards