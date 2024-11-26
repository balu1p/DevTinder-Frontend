import React from "react";
import logo from "../../assets/tinder.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 bg-transparent absolute w-full z-10">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="logo" className="h-12" />
          <h1 className="text-white text-3xl font-bold">DevTinder</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="bg-white px-6 py-2 rounded-lg text-black font-medium text-lg">
              Log in
            </button>
          </Link>
        </div>
      </div>
      <div className="relative ">
        <img
          src="https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp"
          alt="background"
          className="w-full h-screen object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6">
          <h1 className="text-8xl font-bold">Start something epic.</h1>
          <Link to ="/signup">
          <button className="bg-[#E73D76] hover:bg-pink-600 px-8 py-3 rounded-full text-lg font-semibold">
            Create account
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
