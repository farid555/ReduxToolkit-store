import React from "react";
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import CartContainer from "../components/Carts/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../features/cart/cartSlice";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="fixed border items-center w-10/4 top-1/3 left-1/3 bg-red-200 rounded-md p-20 shadow-lg ">
        <h1 className="text-xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="relative">
        <Navbar />

        <Hero />
        {isOpen && <Modal />}
        <CartContainer />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
