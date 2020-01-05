import React from "react";

import { Menu } from "./estilo";

import pokemon_logo from "../../assets/pokemon_logo.png";

const Header = () => (
  <Menu>
    <img src={pokemon_logo} alt="" />
  </Menu>
);

export default Header;
