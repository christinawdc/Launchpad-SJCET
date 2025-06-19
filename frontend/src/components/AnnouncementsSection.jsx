import React from "react";
import announcementIcon from "../assets/announcements-icon.svg";

const announcements=[
    {
        title: "Project Proposal Submission",
        tag: "Deadline",
        date: "July 5, 2025",
        description: "Final date to submit your project for inclusion in the StartUp Expo - Round 1 shortlisting.",
    },
     {
        title: "Code Clash 2.0 – Hackathon",
        tag: "Event",
        date: "August 15, 2025",
        description: "Compete in a 24-hour hackathon with exciting problem statements and prizes!",
    },
    {
        title: "Techspark 2025 – National Tech Fest",
        tag: "Event",
        date: "August 20, 2025",
        description: "Participate in workshops, coding battles, and tech exhibits from top tech clubs across India.",
    },
    {
        title: "New Chat Feature Released !",
        tag: "Update",
        date: "July 12, 2025",
        description: "You can now message other users and project team members directly through the platform.",
    },
    {
        title: "Startup Bootcamp 2025",
        tag: "Event",
        date: "July 18–20, 2025",
        description: "A 3-day immersive experience to kickstart your entrepreneurial journey at SJCET.",
    },
    {
        title: "Mentorship Application Closes",
        tag: "Deadline",
        date: "August 1, 2025",
        description: "Don’t miss your chance to apply for the SJCET Mentorship Program 2025.",
    },
];

const AnnouncementsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-16">
      {/* Heading + Icon */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center gap-4">
        <h2 className="text-5xl font-semibold font-poppins text-[#1F3C04]">Announcements</h2>
         <img src={announcementIcon} alt="Announcements" className="w-8 h-8" />
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto mb-10 flex gap-4 flex-wrap">
        {["All", "Events", "Updates", "Deadlines"].map((filter, idx) => (
          <button
            key={idx}
            className="bg-[#f0f0f0] text-[#1F3C04] rounded-full px-9 py-2 text-base font-medium hover:bg-[#e0e0e0] transition"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Announcement Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex">
        {announcements.map((item, idx) => (
          <div
            style={{ 
              boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.6)`,
              border: "1px solid rgba(144, 146, 142, 0.3)", // #90928E80
         }}
            key={idx}
            className="bg-[#E1FFD4] rounded-3xl p-6 shadow-md flex flex-col items-center text-center min-h-[250px] space-y-2"
          >
            <h3 className="text-xl font-bold text-[#1F3C04] mb-2">
              {item.title}
            </h3>

            <button className="border border-[#1F3C04] text-[#1F3C04] px-4 py-1 rounded-full text-sm font-medium w-fit mb-2">
              {item.tag}
            </button>

            <p className="text-sm text-gray-500 mb-2">{item.date}</p>

            <p className="text-base text-[#1F3C04] mb-4">{item.description}</p>

            <button className="border border-[#1F3C04] text-[#1F3C04] px-4 py-1 rounded-full text-sm font-medium w-fit hover:bg-[#d6f7b5] transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsSection;