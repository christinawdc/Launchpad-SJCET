import React from "react";

const AboutCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-[25px] shadow-[0px_4px_4px_rgba(0,0,0,0.7)] w-full max-w-[1124px] h-[172px] flex items-center px-8 py-4">
      <img src={icon} alt={`${title} icon`} className="w-16 h-16 mr-6" />
      <div className="text-left">
        <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-black text-base">{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
