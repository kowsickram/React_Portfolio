import React from "react";

export default function Home() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-white text-4xl font-medium">KOWSICK RAM M</h1>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center">
        <img
          src="/images/profile.png"
          alt="profile"
          className=" shadow-lg rounded-full p-4 mb-4 md:mr-4"
          height={300}
          width={300}
        />
        <div className="flex flex-col w-full md:pl-4">
          <div className="flex flex-row space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="rounded-full w-10 h-10 flex items-center justify-center"
            >
              <img src="./Assets/facebook.png" alt="facebook" width={50} />
            </a>
            <a
              href="#"
              className="rounded-full w-10 h-10  flex items-center justify-center"
            >
              <img src="./Assets/instagram.png" alt="instagram" width={50} />
            </a>
            <a
              href="#"
              className="rounded-full w-10 h-10 flex items-center justify-center"
            >
              <img src="./Assets/linkedin.png" alt="linkedin" width={50} />
            </a>
            <a
              href="#"
              className="rounded-full w-10 h-10 flex items-center justify-center"
            >
              <img src="./Assets/whatsapp.png" alt="whatsapp" width={50} />
            </a>
          </div>
          <p className="text-lg text-gray-800">
            Welcome to my portfolio! I'm a full-stack developer experienced in the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. Additionally, I have a passion for data science and am proficient in Python, Tableau, and machine learning techniques.
          </p>
        </div>
      </div>
    </div>
  );
}
