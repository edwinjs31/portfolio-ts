import { MouseEventHandler, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmark, BsBriefcase } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './nav.css';

export const Nav = () => {
  const defaultActiveNav = '#';
  const [activeNav, seTactiveNav] = useState(defaultActiveNav);

  return (
    <nav>
      <a
        href='#'
        onClick={() => seTactiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => seTactiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => seTactiveNav('#experience')}
      >
        <BsJournalBookmark />
      </a>
      <a
        href='#services'
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => seTactiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        href='#portfolio'
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={() => seTactiveNav('#portfolio')}
      >
        <BsBriefcase />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => seTactiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
