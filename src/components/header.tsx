import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-16 mobile:px-10 w-full border-b-2 border-b-gray-300 h-24">
      <div className="flex items-center">
        <img src="./assets/logo.png" alt="logo" className="w-14 h-14" />
        <div className="font-bold flex gap-5 ml-10 mobile:hidden">
          <span className="hover:cursor-pointer hover:text-[#007143]">
            MENU
          </span>
          <span className="hover:cursor-pointer hover:text-[#007143]">
            REWARDS
          </span>
          <span className="hover:cursor-pointer hover:text-[#007143]">
            GIFT CARDS
          </span>
        </div>
      </div>
      <div className="flex gap-4 font-semibold mobile:hidden">
        <button className="border-2 border-black px-5 py-1 rounded-full">
          Sign in
        </button>
        <button className="border-2 border-black px-5 py-1 rounded-full bg-black text-white">
          Join now
        </button>
      </div>
      <GiHamburgerMenu className="hidden mobile:block w-8 h-8 hover:cursor-pointer"/>
    </div>
  );
};
