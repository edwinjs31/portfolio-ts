import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';
export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target={'_blank'}>
        <BsLinkedin size={22}/>
      </a>
      <a href='https://github.com' target={'_blank'}>
        <BsGithub size={22}/>
      </a>
      <a href='https://dribbble.com' target={'_blank'}>
        <BsDribbble size={22}/>
      </a>
    </div>
  );
};
