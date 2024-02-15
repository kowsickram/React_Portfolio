import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Site',
      description: 'A website showcasing my portfolio and projects.',
      image: 'https://picsum.photos/400/300?random=1',
      githubLink: 'https://github.com/yourusername/portfolio-site',
      demo : 'http://demo.domain.com'
    },
    {
      title: 'Password Generator',
      description: 'A tool to generate secure passwords.',
      image: '/Images/2.png',
      githubLink: 'https://github.com/kowsickram/React-Passsword_Generator',
      demo : 'http://demo.domain.com'
    },
    {
      title: 'To-Do List',
      description: 'A simple to-do list application.',
      image: '/Images/1.png',
      githubLink: 'https://github.com/kowsickram/React-To-Do',
      demo : 'http://demo.domain.com'
    },
    {
      title: 'Banking App',
      description: 'An online banking application.',
      image: '/Images/banking.jpg',
      githubLink: 'https://github.com/yourusername/banking',
      demo : 'http://demo.domain.com'
    },
  ];

  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000, // Transition speed
    autoplay: true,
    autoplaySpeed: 3000, // Auto slide interval
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h1 className="text-2xl text-center bg-teal-950  p-3 text-white uppercase font-bold mb-4">Projects</h1>
    <div className="container w-4/5 mx-auto mt-4">
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, index) => (
            <div key={index}>
              <div className=" p-4 bg-slate-950 h-auto rounded-lg">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className='text-center mb-2 text-lg font-semibold uppercase'>{project.title}</h2>
                  <img src={project.image} alt={`Project ${index + 1}`} width={300} className="mx-auto rounded-lg" />
                  <p className="text-center mt-2">{project.description}</p>
                  <div className="text-center mt-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button onClick={goToPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </div>
    </>
  );
}
