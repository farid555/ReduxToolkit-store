import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed  top-1/3 left-1/3 border flex flex-col items-center justify-center bg-red-200 rounded-md p-20 shadow-lg ">
      <h1 className="text-xl font-bold">
        Remove all the items from your shopping cart?
      </h1>
      <div className="flex flex-row items-center justify-center">
        <button
          className=" bg-gray-200 shadow w-32 h-27 items-center m-8 rounded-md"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Yes
        </button>
        <button
          className="bg-gray-200 shadow w-32 h-27 items-center m-8 rounded-md"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
};

export default Modal;
