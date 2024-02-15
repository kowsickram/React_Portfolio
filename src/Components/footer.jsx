import React from "react";

export default function Footer() {
  return (
    <footer className="container bg-slate-950 w-full">
      <h1 className="text-center text-white font-bold py-4">
        Get In Touch &hearts;
      </h1>
      <div className="flex flex-row justify-around">
      <div className="flex ">
        <ul className="text-white p-10 flex flex-col justify-center ">
          <li className="m-3">Home</li>
          <li className="m-3">About</li>
          <li className="m-3">Projects</li>
          <li className="m-3">Contact Me</li>
        </ul>
      </div>
      <div className="flex ">
      <div className="flex flex-col space-x-4 justify-center mb-4 md:mb-0">
      <h1 className="text-white font-bold">CONTACT</h1>
<p className="text-white">255, Indra Nagar, Chandrapuram, Tirupur <br />
kowsickram05122001@gmail.com <br />
+91 93610 64546
</p>
          </div>
      </div>
      </div>
    </footer>
  );
}
