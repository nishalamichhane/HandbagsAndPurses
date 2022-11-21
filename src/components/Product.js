import React from "react";

function Product(props){
    console.log("props is:"+props);
    return(
        <>
            <article>
            <span>{props.labelTxt}</span>
            <img src ={props.img} alt=""></img>
            <p>{props.bagName}</p>
            <h4>{props.price}</h4>
            </article>
        </>
    )

}
export default Product;