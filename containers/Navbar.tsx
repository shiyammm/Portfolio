import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="fixed bg-transparent text-white flex-center w-full">
      <div className="flex-between w-full px-8 h-[10vh]">
        <header>
          <h1 className="font-roslindale-display text-xl sm:text-2xl 2xl:text-3xl flex-shrink-0">
            Shiyam Robert
          </h1>
        </header>
        <div>
          <RiMenu3Fill className="text-white size-6 sm:size-7 xl:size-8 2xl:size-9" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
