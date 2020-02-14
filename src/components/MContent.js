import React from "react"
import "./mov.css"
import Data from "./Data"
import MovieList from "./MovList"
class MContent extends React.Component{
    constructor(){
        super()
        this.state = {
            movie: "Avengers" 
        }
    }
    render(){
        const MovieClips = Data.map(card => <MovieList key={card.id} card= {card}/>) 
        return(
            <div>
                <h1> 
                    {MovieClips}
                </h1>
            </div>
        )
    }
}
export default MContent