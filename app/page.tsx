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
          className="w-[520px] h-[360px] z-[1] md:h-[460px] md:w-[460px]"
        />
      </div>
      <Image 
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />
      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px] md:text-[30px]">
          Transforming ideas into{" "}
          <span className="red-text text-red-500">Digital Reality</span>
        </h1>
        <ul className="text-[19px] text-gray-200 md:text-whie-400 mb-10 md:pb-2 max-w-[400px] list-disc md:text-[14px]">
          <li className="marker:text-gray-100">I&#39;m a software-engineering student with a passion for Full Stack Software Engineering</li>
          <li className="marker:text-gray-100">Eager to apply newly acquired skills in designing and implementing dynamic web solutions</li>
          <li className="marker:text-gray-100">Proficient in both front-end and back-end technologies, ready to contribute to innovative projects and continue learning and growing in the field</li>
        </ul>


        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
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


