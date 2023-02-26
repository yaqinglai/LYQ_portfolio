import React from 'react';
import styles from '../style';
import {socialMedia} from '../constants';

const Footer = () => {
  return (
    <section>
      <div className="flex flex-row justify-end md:mt-0 mt-6 mb-10">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[50px] h-[50px] object-contain cursor-pointer`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </section>
  )
}

export default Footer