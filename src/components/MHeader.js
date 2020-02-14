import React from "react"
import "./mov.css"
function MHeader(){
    return(
        <div>
            <header> 
                {/* <img className = "icon" src = ""  */}
                {/* alt ="Movie-card-image"/> */}
                <div>
                    <div >
                        <img  className= "headerImg" src= "https://icon-library.net/images/slate-filming-set_318-9164.jpg" alt = "movie icon"/>
                    </div>
                    <h1 className= "texthead">Movie Flash Cards</h1>
                </div>
            </header>
        </div>
    )
}
export default MHeader