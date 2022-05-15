import React from "react";

const index = () => {
  return (
    <div className="mt-20">
      <div className="bg-slate-500 py-32 py32">
        <div className="flex justify-between">
          <div className="mt-14 mr-4">
            <h1
              style={{ fontSize: "4rem" }}
              className=" text-blue-50 mx-8 items-center text-bold"
            >
              Welcome to our Store
            </h1>
          </div>
          <div>
            <img
              className="rounded-xl mr-8 items-center shadow-lg"
              style={{ height: "328px", width: "433px" }}
              src="img/computerlogo.jpg"
              alt="book logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
