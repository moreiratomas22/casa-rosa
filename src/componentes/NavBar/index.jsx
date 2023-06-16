import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ directions }) => {
    return (
        <nav>
            {directions.length > 0 ? (
                directions.map(item => {
                    return (
                        <NavLink key={item.path} to={item.path}>
                            {item.name}
                        </NavLink>
                    )
                })
            ) : (
                null
            )}
        </nav>
    )
}

export default NavBar;