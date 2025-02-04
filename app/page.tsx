import Particle from "@/components/Particle";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
        <Particle />
      </div>

      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/girl2.png"
          alt="GirlEngineer"
          width={560}
          height={560}
          className=" w-[260px] h-[260px] z-[1] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[570px] lg:w-[570px]"
        />
      </div>
      <Image 
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />
      <div className="flex flex-col gap-3 z-[10] pl-5 pt-0 max-w-[70%] mr-auto">
        <h1 className="text-[25px] sm:text-[25px] md:text-[40px] md:ml-10 md:max-w-[800px] lg:text-[34px] lg:ml-20 xl:text-[38px] xl:mt-20 xl:ml-6 text-white max-w-[500px] ">
          Transforming ideas into{" "}
          <span className="red-text text-red-500">Digital Reality</span>
        </h1>
        <ul className="text-[15px] mb-[13px] text-gray-200 md:text-gray-200 md:text-[25px] md:pb-6 md:max-w-[800px] md:ml-10 lg:text-[26px] lg:max-w-[900px] lg:ml-20  xl:text-[22px] xl:ml-6 xl:max-w-[60%] list-disc ">
          <li className="marker:text-gray-200 mb-[3px] md:mb-[6px]">Software-engineering student with a passion for Full Stack Software Engineering</li>
          <li className="marker:text-gray-200 mb-[3px] md:mb-[6px]">Proficient in both front-end and back-end technologies, ready to contribute to innovative projects and continue growing in the field</li>
        </ul>


        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5 xl:ml-10">
        <Image
          src="/assets/rounded-text.png"
          alt="projects"
          width={160}
          height={160}
          className="slow-spin"
  
        />
        </div>
      </div>

      
    </main>
  );
}


