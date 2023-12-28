import React, { useContext } from "react";
import { Basketcontext } from "../context/Basketcontext";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(Basketcontext);

  const total = basket.reduce((total,i)=> total+ i.price*i.amount,0)
  return (
    <div>
      {basket.length === 0 ? (
        <h3>Öncelikle sepete bir kaç ürün ekleyiniz</h3>
      ) : (
        <h5 className="text-center my-5">
          Toplam : <span className="text-success">{total}₺</span>
        </h5>
      )}

      {basket.map((i, index) => (
        <div
          className="d-flex justify-content-between align-items-center p-3 gap-3"
          key={index}
        >
          <img src={i.image} height={100} className="rounded shadow" alt="" />
          <h4>{i.title.slice(0.15)}...</h4>
          <h3>{i.price}</h3>
          <p>Miktar:{i.amount}</p>

          <div>
            <BiSolidUpArrow
              role="button"
              className="text-success"
              onClick={() => addToBasket(i)}
            />
            <BiSolidDownArrow
              role="button"
              className="text-danger"
              onClick={() => removeFromBasket(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Checkout;
