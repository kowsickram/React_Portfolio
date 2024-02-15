import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl text-center bg-teal-950 p-3 text-white uppercase font-bold mb-4">About</h1>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Web Development Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <ul className="list-disc pl-6">
              <li><i className="fab fa-html5 text-orange-500 mr-2"></i> HTML</li>
              <li><i className="fab fa-css3-alt text-blue-500 mr-2"></i> CSS</li>
              <li><i className="fab fa-react text-blue-400 mr-2"></i> React.js</li>
              <li><i className="fas fa-database text-green-500 mr-2"></i> MongoDB</li>
              <li><i className="fas fa-database text-blue-500 mr-2"></i> MySQL</li>
              <li><i className="fab fa-node-js text-green-400 mr-2"></i> Node.js</li>
              <li><i className="fas fa-server text-green-600 mr-2"></i> Express</li>
            </ul>
          </div>

          {/* Data Science Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Data Science</h3>
            <ul className="list-disc pl-6">
              <li><i className="fab fa-python text-blue-500 mr-2"></i> Python</li>
              <li><i className="fas fa-chart-bar text-green-500 mr-2"></i> Tableau</li>
              <li><i className="fas fa-brain text-purple-500 mr-2"></i> Machine Learning</li>
            </ul>
          </div>

          {/* Graphic Design Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Graphic Design</h3>
            <ul className="list-disc pl-6">
              <li><i className="fas fa-vector-square text-red-500 mr-2"></i> CorelDRAW</li>
              <li><i className="fab fa-adobe text-red-600 mr-2"></i> Photoshop</li>
              <li><i className="fas fa-camera text-purple-500 mr-2"></i> Lightroom</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
