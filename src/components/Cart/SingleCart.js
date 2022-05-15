import React from "react";

const SingleCart = ({ title, img }) => {
  return (
    <div className="bg-blue-300  px-12 py-10  min-w-max mx-6 my-6 w-1/6 items-center justify-between rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow">
      <div className="flex min-w-full flex-col items-center justify-center">
        <img className="h-32 w-32" src={img} alt="book logo" />
        <div>
          <p className="text-black text-lg mt-2 text-center">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
