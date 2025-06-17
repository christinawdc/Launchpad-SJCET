import React from "react";

const ProjectCard = ({ title = "Project Title" }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-md mx-auto flex flex-col items-center p-2">
      <div className="bg-[#E1FFD4] rounded-3xl w-full h-64 mx-2 mt-2"></div>
      
      <div className="w-full flex justify-center">
        <div className="text-3xl text-black py-6 text-center w-11/12">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
