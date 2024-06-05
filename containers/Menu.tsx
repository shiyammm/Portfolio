'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 400,
      height: 550,
      top: '-25px',
      right: '-25px',
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: [0.75, 0, 0.24, 1],
      },
    },
    closed: {
      width: 100,
      height: 40,
      top: '0px',
      right: '0px',
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'tween',
        ease: [0.75, 0, 0.24, 1],
      },
    },
  };

  const navLinks = [
    {
      link: 'Home',
    },
    {
      link: 'About',
    },
    {
      link: 'Works',
    },
    {
      link: 'Contact',
    },
  ];

  const perspective = {
    initial: {
      opacity: 0,
    },
    enter: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="bg-[#1d1d1f] w-96 h-96 rounded-3xl relative"
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <div className="flex flex-col justify-between h-full pl-16 pt-20 pb-14 pr-10">
              <div className="body space-y-3 gap-10">
                {navLinks.map((nav, i) => (
                  <motion.div
                    key={nav.link}
                    className="font-medium"
                    variants={perspective}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a href="" className="text-[40px] flex">
                      {nav.link}
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="footer flex-between text-2xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.9,
                }}
                exit="exit"
              >
                <a href="http://">Github</a>
                <a href="http://">LinkedIn</a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      <div
        className="button font-semibold hover:font-semibold text-lg"
        onClick={() => setIsActive(!isActive)}
      >
        <motion.div
          className="slider"
          animate={{ top: isActive ? '-100%' : '0' }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="element">
            <p>Menu</p>
          </div>
          <div className="element">
            <p>Close</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Menu;
