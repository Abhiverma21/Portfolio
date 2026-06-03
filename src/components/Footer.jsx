import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/10 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div>
          <h3 className="text-white font-bold text-xl tracking-wider">
            Abhi<span className="text-cyan-400">Verma</span>
          </h3>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {currentYear} All rights reserved. Built with React & Tailwind.
        </p>

        {/* Quick Links */}
        <div className="flex gap-6">
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition text-sm">About</a>
          <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition text-sm">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition text-sm">Contact</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;