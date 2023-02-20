import React from 'react';
import{ project } from '../constants';
import styles from '../style';

const ProjectCard = ({ content, title, img, index}) => {
  return (
  <div className={`flex flex-row p-3 rounded-[20px] ${index !== project.length - 1 ? "mb-10" : "mb-0"} feature-card cursor-pointer`}>
    <div className={`w-[300px] h-[300px] m-10 ${styles.flexCenter}`}>
      <img src={img} alt="vector" className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col justify-center m-10">
      <h4 className="font-roboto font-semibold text-white text-[52px] leading-[50px] mb-10">
        {title}
      </h4>
      <p className="font-roboto font-normal text-dimWhite text-[18px] leading-[30px] max-w-[520px]">
        {content}
      </p>
    </div>
  </div>
  )
}

export default ProjectCard