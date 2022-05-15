import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneGift } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProfileIcon = () => {
  const amount = useSelector((store) => store.cart.amount);

  console.log(
    useSelector((store) => {
      console.log(store);
    }),
  );
  return (
    <div className="flex justify-between">
      <div className="flex justify-end ">
        <span className="z-40 absolute  bg-red-600 text-white text-sm font-bold rounded-full py-1 px-2 ">
          {amount}
        </span>
        <AiTwotoneGift className=" relative text-white mx-4 h-8 w-8" />
      </div>

      <CgProfile className="text-white h-8 w-8 ml-6" />
    </div>
  );
};

export default ProfileIcon;
