import React from "react"
import "./mov.css"
function MovieList(props){
    return(
        <div className ="card">
            <img className="cardImg" src = {props.card.imgUrl} alt ="movieimage"/>
           <h2 className="cardName">{props.card.name}</h2>
           <p className="cardDescribe">{props.card.description}</p>
        </div>
    )
}
export default MovieList