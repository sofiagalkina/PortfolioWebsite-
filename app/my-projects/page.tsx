import React from "react";
import ProjectSlider from "@/components/ProjectSlider";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
        <div className="flex flex-col gap-3">
            <h1 className="text-[50px] text-white font-semibold">
                My Projects <span className="red-dot text-red-500">.</span>
            </h1>
            <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
            Here&#39;s a collection of my web development projects where I&#39;ve tackled everything from front-end design to back-end functionality. Each project reflects my passion for coding and problem-solving, showcasing the skills I&#39;ve honed along the way. Take a look around—I&#39;m always excited to share what I&#39;ve been working on!

            </p>
        </div>

        { <ProjectSlider /> }

    </div>
  );
}

export default Page;