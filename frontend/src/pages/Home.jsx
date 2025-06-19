import React from "react";
import Navbar from "../components/Navbar";
import StartUpCard from "../components/StartUpCard";
import ProjectCard from "../components/ProjectCard";

const startupData = [
  {
    logo: "LOGO",
    description:
      "This is rough description of start-Ups . Rough text rough text rough text rough text rough text.  Rough text rough text rough text rough text.  Rough text rough text rough text rough text. Rough text rough text rough text rough text. Rough text rough text rough text rough text.",
  },
  { logo: "LOGO", description: "" },
  { logo: "LOGO", description: "" },
  { logo: "LOGO", description: "" },
];

const projectData = [
  {
    title: "Project Title",
    description:
      "This is rough description of projects . Rough text rough text rough text rough text rough text.  Rough text rough text rough text rough text.  Rough text rough text rough text rough text. Rough text rough text rough text rough text. Rough text rough text rough text rough text.",
  },
  { title: "Project Title", description: "" },
  { title: "Project Title", description: "" },
  { title: "Project Title", description: "" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-center text-center relative"
        style={{
          background:
            "linear-gradient(44.85deg,  rgba(220, 230, 210, 0) 10%,rgba(180, 240, 120, 0.28) 50%,rgba(170, 230, 110, 0.45) 85%",
        }}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-full pt-32 pb-16"
          style={{ opacity: 3 }}
        >
          <h1
            className="text-7xl md:text-8xl font-bold font-poppins mb-6 text-[#1F3C04]"
            style={{ letterSpacing: "2px" }}
          >
            Discover . Connect
          </h1>
          <p className="text-[#aaada7] text-5xl mb-12 font-normal">
            Showing Projects and StartUps
          </p>
          <div className="flex flex-row gap-8 mt-4">
  <button className="bg-[#DCFFB9A8] text-black text-2xl px-10 py-3 rounded-xl font-normal font-ponnala hover:bg-[#c4f5a2] transition-all duration-200 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
    Join Us
  </button>
  <button className="bg-[#DCFFB9A8] text-black text-2xl px-10 py-3 rounded-xl font-normal font-ponnala hover:bg-[#c4f5a2] transition-all duration-200 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
    Explore Projects
  </button>
</div>

        </div>
      </section>

      {/* Featured Startups Section */
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-[#404638] font-poppins">FEATURED STARTUPS</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {startupData.map((item, idx) => (
              <StartUpCard
                key={idx}
                logo={item.logo}
                description={item.description}
             s />
            ))}
          </div>
        </div>
      </section>
}

      {/* Featured Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-[#404638] font-poppins">FEATURED PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projectData.map((item, idx) => (
              <ProjectCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
