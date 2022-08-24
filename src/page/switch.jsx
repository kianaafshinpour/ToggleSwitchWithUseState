import React from "react";
import '../css/toggle_design.css';

function Switch ({onClick}){
    return(
        <>
        <label For="checkbox" className="label" onClick={onClick}>
                <div className="ball"></div>
            </label>
        </>
    );
}export default Switch;