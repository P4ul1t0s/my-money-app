import React from "react";
import MenuItem from "./MenuItem.jsx";
import MenuTree from "./MenuTree.jsx";

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label="DashBoard" icon="dashboard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#billingCycles" icon="usd" label="Ciclos de Pagamentos"/>
        </MenuTree>
    </ul>
)