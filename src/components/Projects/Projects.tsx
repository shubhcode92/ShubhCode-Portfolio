import React from 'react';

interface ProjectsProps {
  color: string;
  loc: string;
}

const Projects: React.FC<ProjectsProps> = ({ color, loc }) => {
  return (
    <>
      <div id={loc} className={` bg-[#F9F9F9]`}>
        <div className='text-[20px] font-bold text-center py-20 mx-10 lg:px-60 lg:py-28 lg:text-[26px]'>New Projects coming soon..🤠</div>
      </div>
    </>
  );
};

export default Projects ;