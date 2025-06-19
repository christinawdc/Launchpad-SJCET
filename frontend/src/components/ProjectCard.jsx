import React from "react";

const ProjectCard = ({ title = "Project Title" }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-md mx-auto flex flex-col items-center p-3"
    style={{
        border: "0.83px solid rgba(144, 146, 142, 0.5)" // #90928E80
      }}>
      <div className="bg-[#E1FFD4] rounded-3xl w-full h-52 mt-0"></div>
      <div className="w-full flex justify-center">
        <div className="text-2xl text-black py-2">{title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
