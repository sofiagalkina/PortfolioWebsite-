import React from "react";
import ProjectSlider from "@/components/ProjectSlider";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#542370]">
        <div className="flex flex-col gap-3">
            <h1 className="text-[50px] text-white font-semibold">
                My Projects <span className="red-dot text-red-500">.</span>
            </h1>
            <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel, hic consequatur consequuntur eius cupiditate tenetur quisquam iste assumenda similique saepe? Quisquam reiciendis magnam fugit necessitatibus. Facere repellendus asperiores necessitatibus!

            </p>
        </div>

        { <ProjectSlider /> }

    </div>
  );
}

export default Page;