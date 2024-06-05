import React from 'react';
import Menu from '@/containers/Menu';

const Navbar = () => {
  return (
    <nav className="fixed bg-transparent text-white w-full">
      <div className="flex-between w-full relative">
        <header className="absolute top-10 left-10">
          <h1 className="font-roslindale-display text-xl sm:text-2xl flex-shrink-0">
            Shiyam Robert
          </h1>
        </header>
        <div className="absolute top-10 right-10">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
