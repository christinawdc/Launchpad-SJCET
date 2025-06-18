import React from "react";

const ProjectCard = ({ title = "Project Title" }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-md mx-auto flex flex-col items-center">
      <div className="bg-[#E1FFD4] rounded-3xl w-full h-64 mt-0"></div>
      <div className="w-full flex justify-center">
        <div className="text-3xl text-black py-6">{title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
