
import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,img,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
            {ingredients.map(ingredient=>(

                <li> {ingredient.text}</li>
            ))}
            </ul>
            <p>{calories}</p>
            <img className={style.image} src={img} alt="" />
        </div>
    )
}
export default Recipe;
