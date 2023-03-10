import React from 'react';
import styles from '../style';
import { designer } from '../assets';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <p className={`${styles.paragraph} ss:text-[32px] text-[22px]`}>
            Hello! I'm
        </p>
        <Typed 
        strings={['YaQing Lai']} 
        typeSpeed={120} backSpeed={140} 
        loop 
        className="font-roboto font-semibold ss:text-[98px] text-[82px] text-gradient ss:leading-[150px] leading-[95px] w-full"/>

        <div className="flex flex-row">
          <h1 className="font-roboto font-normal ss:text-[52px] text-[32px] text-white ss:leading-[100px] leading-[85px] w-full">
            UI / UX Designer
          </h1>

        </div>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Passionate about bridging human-computer interactions as well as human-human interactions through computers
        </p>

        <div className="flex justify-start items-center w-full mt-7">
          <button type='button' className={`py-4 px-6 font-roboto font-semibold text-[18px] text-white bg-[#879ced] rounded-[10px] outline-none ${styles} hover:bg-[#dec0f1]`}>
            Download Resume
          </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={designer} alt="designer" className="w-[500px] h-[500px] relative" />
      </div>
    </section>
  )
}

export default Hero