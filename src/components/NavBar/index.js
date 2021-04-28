import React from "react";
import { Nav, Link } from "./styles";
// Se importan los iconos desde react icons
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

// constante con el tamaño de los iconos
const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};
