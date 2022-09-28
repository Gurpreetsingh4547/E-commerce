import React from "react";

// Redux Store
import { useSelector } from "react-redux";
import { ArrayHaveValue, IsArray } from "../../../Services/Helper";
import { CartItemCard } from "../../../Components/Common/CartITemCard";

const CartProductsListing = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {IsArray(cartProducts)
        && ArrayHaveValue(cartProducts)
        && cartProducts.map((item, index) => (
          <CartItemCard cartItems={item} key={item.id} index={index} />
        ))}
      {!ArrayHaveValue(cartProducts) && <p className="text-center text-lg ">Your Amazon Cart is empty</p>}
    </>
  );
};

export { CartProductsListing };
