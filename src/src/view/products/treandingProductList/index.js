/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";

// redux store
import { useDispatch, useSelector } from "react-redux";
import { increment, cartProducts, showLoader } from "../../../Store/ReducersAndActions";

// Components
import { Product } from "../../../Components/Common/Card/Product";
import { Loader } from "../../../Library/Loader";

// Fake Data
import { ProductsList } from "../../../Config/fakeData";
import { ArrayHaveValue, IsArray } from "../../../Services/Helper";

// Services
import { Event } from "../../../Services/Event";

/**
 * Listing the Trending products
 * @returns Node
 */
const TrendingProductList = () => {
  const ShowLoader = useSelector((state) => state.cart.isLoader);
  const dispatch = useDispatch();

  /**
   *
   * @param {Object} item
   */
  const addToCart = (item) => {
    // Dispatch A action to change store state
    dispatch(increment());
    dispatch(cartProducts(item));
    dispatch(showLoader());
    setTimeout(() => {
      dispatch(showLoader());
      Event("toast", "success", "Product added Successfully");
    }, 1000);
  };
  return (
    <>
      {IsArray(ProductsList.products)
        && ArrayHaveValue(ProductsList.products)
        && ProductsList.products.map((item) => (
          <Product
            handleAddToCart={() => addToCart(item)}
            productData={item}
            key={item.id}
          />
        ))}
      <Loader isLoader={ShowLoader} />
    </>
  );
};

export { TrendingProductList as TreandingProductList };
