import React from "react";
import SingleCart from "../Cart/SingleCart";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../../features/cart/cartSlice";

const CartItem = ({ id, title, price, amount, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white-200 rounded-md shadow px-6 py-4 w-full flex my-2">
      <div className="w-1/4">
        <SingleCart img={img} title={title} />
      </div>
      <div className="w-2/4 flex flex-col justify-end m-16 items-start">
        <p className="text-lg font-bold">Title: {title}</p>
        <p className="text-lg font-bold">Price: {price} </p>
        <p className="text-lg font-bold">Amount: {amount}</p>
        <button
          className="bg-gray-200 rounded-md py-1 px-1 shadow-md items-center text-blue-300"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col justify-flex-end mt-10">
        <button>
          <AiOutlineUp
            className="m-8"
            onClick={() => dispatch(increaseItem({ id }))}
          />
        </button>

        <div className="items-center text-md ml-8 ">{amount}</div>
        <button>
          <AiOutlineDown
            className="m-8"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
              }
              dispatch(decreaseItem({ id }));
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
