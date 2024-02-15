import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 shadow-md" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <span className='text-2xl font-normal text-slate-900 '>Kowsick </span> <span className='text-2xl text-slate-700 font-bold'>Ram M</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="text-2xl">☰</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
          <Link to="/projects" className="text-sm font-semibold leading-6 text-gray-900">Projects</Link>
          
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/contact" className="text-sm font-semibold p-2 rounded-lg leading-6 bg-slate-800 text-white">Contact  <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className="fixed inset-0 z-10 bg-black opacity-50 transition-opacity lg:hidden" style={{opacity: mobileMenuOpen ? '1' : '0', pointerEvents: mobileMenuOpen ? 'auto' : 'none'}} onClick={() => setMobileMenuOpen(false)}></div>
      <div className="lg:hidden fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white overflow-y-auto transition-transform duration-200 ease-out" style={{transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'}}>
        {/* Mobile menu content */}
        <div className="p-6">
          <Link to="/" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
          <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>
          <Link to="/projects" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Projects</Link>
          <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-slate-800 text-white hover:bg-gray-50">Contact <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </header>
  );
}
