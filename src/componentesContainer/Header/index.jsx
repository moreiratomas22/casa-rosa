import React from "react";
import {Titulo} from "../../componentes";

import "./style.css";

const Header = () => {
    const title = "Casa Rosa";
    const subTitle = "Destileria Artesanal";

    return (
        <div><Titulo title={title} subTitle={subTitle}/> </div>
    )

}

export default Header;