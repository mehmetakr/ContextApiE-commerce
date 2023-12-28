import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Basketcontext } from "../context/Basketcontext";

import { useContext } from "react";
const Header = (i) => {

const context =useContext(Basketcontext);
const totalAmount =context.basket.reduce((total ,i)=> total+ i.amount, 0);
    
  return (
    <header className="d-flex justify-content-between align-items-center p-4 text-light bg-dark sticky-top">
      <Link to={"/"} className="fs-4">Context Store</Link>

      <Link to={"/sepet "}  className="fs-4 text-light">
        <FaShoppingCart />
        <span className="mx-2   badge bg-danger">{totalAmount}</span>
      </Link>
    </header>
  );
};

export default Header;
