import React from 'react';
import styles from '../style';

const Contact = () => {
  return (
    <section id='home' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
      <div>
        <div className="flex flex-col mb-10">
          <h1 className="font-roboto font-semibold ss:text-[70px] text-[50px] text-gradient ss:leading-[100px] leading-[55px] mb-3 flex justify-center w-full">
            Get in Touch
          </h1>
          <p className={`${styles.paragraph} flex justify-center`}>
            I can't wait to know you, feel free to submit a contact form!
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col justify-center items-start w-full max-w-[570px]">
            <div className="flex flex-col w-full">
              <label className="font-roboto font-normal ss:text-[23px] text-[18px] text-dimWhite ">Your name</label>
            
              <input type='text' placeholder='Enter your name' className="ring-1 ring-primary rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary mt-1" />
            </div>

            <div className="flex flex-col w-full my-4">
              <label className="font-roboto font-normal ss:text-[23px] text-[18px] text-dimWhite">Email address</label>
            
              <input type='email' placeholder='Enter your email' className="ring-1 ring-primary rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary mt-1" />
            </div>

            <div className="flex flex-col w-full">
              <label className="font-roboto font-normal ss:text-[23px] text-[18px] text-dimWhite">Message</label>
            
              <textarea type='message' placeholder='Enter a message' rows='7' className="ring-1 ring-primary rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-secondary mt-1"></textarea>
            </div>

            <div className="flex justify-center items-center w-full mt-7">
              <button type='button' className={`py-4 px-6 font-roboto font-semibold text-[18px] text-dimWhite bg-tertiary rounded-[10px] outline-none ${styles} hover:bg-secondary`}>
                Let's talk!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact