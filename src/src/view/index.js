import React from "react";

// Components
import { NavBar } from "./Navbar";
import { ImageSlider } from "./ImageSlider";
import { TrendingProducts } from "./TrendingProducts";

/**
 * NavBar links
 */
const NavBarLinks = ["Home", "Shop", "About", "Contact"];

/**
 * Dashboard
 * @returns Node
 */
const DashBoard = () => (
  <>
    <NavBar links={NavBarLinks} />
    <ImageSlider />
    <TrendingProducts />
  </>
);

export { DashBoard };
