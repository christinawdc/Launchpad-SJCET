import React from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ProfileCard from "../components/ProfileCard";

const ConnectPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Connect</h1>
        <FilterBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProfileCard key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ConnectPage;