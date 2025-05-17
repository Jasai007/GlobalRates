import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Globe className="h-6 w-6 text-blue-400 mr-2" />
            <span className="font-heading font-bold text-lg">GlobeRates</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GlobeRates. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Disclaimer: All exchange rates are fictional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;