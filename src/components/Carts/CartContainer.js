import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { openModal } from "../../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="flex flex-col items-center mt-5 mb-5">
        <header className="font-bold text-lg">Your Bag</header>
        <h4 className="text-sm"> is currently empty</h4>
      </section>
    );
  }

  return (
    <React.Fragment>
      <section className="container ml-36 items-center">
        {/*cart header*/}
        <header className="flex flex-col items-center mt-5 mb-5">
          <h2 className="bg-sky-300 w-50 h-30 px-6 py-4 font-bold text-lg rounded-md">
            Your bag
          </h2>
        </header>
        {/*cart items*/}
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>

        <div className="grid gap-4  grid-cols-3 ml-8 mt-2 mb-2 leading-9">
          <h4 className="font-mono text-xl font-bold ml-20">total amount:</h4>
          <span className="font-mono text-xl font-bold">
            ${total.toFixed(2)}
          </span>
          <button
            className=" bg-red-400  h-16 m-4 w-32 rounded-md mb-8"
            onClick={() => {
              dispatch(openModal());
            }}
          >
            clear cart
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartContainer;
