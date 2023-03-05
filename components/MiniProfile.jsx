import Image from "next/image";
import React from "react";
import profile from ".././images/profile.JPG";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image
        src={profile}
        alt="Profile Image"
        className=" h-16 w-16 rounded-full p-[2px] "
      />
      <div>
        <h2>deepgandhi.08</h2>
        <h3>Welcome to Instagram</h3>
      </div>
      <button>Sign Out</button>
    </div>
  );
};

export default MiniProfile;
