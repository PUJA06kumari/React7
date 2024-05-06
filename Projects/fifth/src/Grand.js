import React from "react"
function Grand(props)
{
    return(
        <div>
            <img src={props.image} alt="im" />
            <p> {props.titles} </p>
        </div>
    )
}
export default Grand;