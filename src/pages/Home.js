import React from "react";
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import CartContainer from "../components/Carts/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log(isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

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
