import React from "react";

function Button({btnText,onClick,toBeDisabled}){
    return(
        <>
        <button type="button"
                onClick = {onClick}
                disabled={toBeDisabled}>
            {btnText}
        </button>
        </>
    );

}
        export default Button;