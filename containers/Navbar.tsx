import React from 'react';
import Menu from '@/containers/Menu';

const Navbar = () => {
  return (
    <nav className="fixed bg-transparent text-white flex-center w-full">
      <div className="flex-between w-full py-5 px-8">
        <header>
          <h1 className="font-roslindale-display text-xl sm:text-2xl flex-shrink-0">
            Shiyam Robert
          </h1>
        </header>
        <div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
