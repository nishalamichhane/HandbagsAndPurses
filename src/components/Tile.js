import React from "react";
function Tile(props){
    const title = props.title;
    if(title!=="")
        return (
            <>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
            </>
        )
    else
        return (
            <>
                }
                    <img src={props.paragraph} alt=""/>
            </>
        )
}
export default Tile;