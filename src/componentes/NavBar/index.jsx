import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = ({directions}) => {
    console.log(directions)
    return (
        <nav>
            {directions.map(item => {
                
                return (<NavLink to={item.path}>
                    item.name
                </NavLink>)
            })}
        </nav>
    ),
}

export default NavBar;