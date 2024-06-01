'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PerspectiveText from '@/components/perspectiveTest';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="w-[100px] h-[40px] bg-red-500 rounded-3xl cursor-pointer relative uppercase overflow-hidden"
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        animate={{ top: isActive ? '-100%' : '0' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full"
      >
        <div className="bg-cyan w-full h-full text-black">
          <PerspectiveText label="Menu" />
        </div>
        <div className="w-full h-full bg-black-1 text-white absolute top-[100%]">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
      label
    </div>
  );
};

export default Menu;
