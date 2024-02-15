import React from "react";
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto flex items-center justify-center w-4/5">
          
          
        </div>
      </div>
      <div className="container w-4/5 mx-auto mt-6 flex flex-col md:flex-row items-center">
        <img
          src="/images/profile.png"
          alt="profile"
          className=" shadow-lg rounded-full p-4 mb-4 md:mr-4"
          height={300}
          width={300}
        />
        <div className="flex flex-col w-4/5 md:pl-4">
        <h1 className=" font-normal text-2xl">
          Hello World, I'm  kowsick Ram M<b><Typewriter
  options={{
    strings: ['Full Stack Developer', 'Data Analyst', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
/></b></h1>
          
          <p className=" text-justify text-lg text-gray-800">
            Welcome to my portfolio! I'm a full-stack developer experienced in the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. Additionally, I have a passion for data science and am proficient in Python, Tableau, and machine learning techniques.
          </p>
        </div>
      </div>
    </div>
  );
}
