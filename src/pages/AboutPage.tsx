import React from 'react';
import { Globe, MapPin, Briefcase, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="card mb-8">
        <div className="flex items-center mb-6">
          <Globe className="h-10 w-10 text-blue-500 mr-4" />
          <h1 className="font-heading font-bold text-3xl text-gray-800">About GlobeRates</h1>
        </div>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          GlobeRates was built to add some fun to your travel planning with completely made-up 
          exchange rates. No financial accuracy intended!
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Whether you're planning a trip to a distant continent or just dreaming of faraway 
          places, our fictional currency converter brings a touch of imagination to your journey. 
          Compare currencies, save your favorites, and enjoy the playful way we approach travel planning.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
          <p className="text-blue-800 text-sm italic">
            <strong>Disclaimer:</strong> All exchange rates on GlobeRates are entirely fictional 
            and randomly generated. Please do not use this application for actual financial decisions 
            or currency conversion. Travel safe!
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-2xl text-gray-800 mb-6">Our Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card flex">
          <div className="mr-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2">Global Currency Coverage</h3>
            <p className="text-gray-600">
              Browse through a wide range of currencies from countries around the world.
            </p>
          </div>
        </div>

        <div className="card flex">
          <div className="mr-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Briefcase className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2">Travel Planning</h3>
            <p className="text-gray-600">
              Use our converter to get a fun perspective on how your money might stretch.
            </p>
          </div>
        </div>

        <div className="card flex">
          <div className="mr-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Heart className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2">Favorites System</h3>
            <p className="text-gray-600">
              Save your most-used currency pairs for quick access anytime.
            </p>
          </div>
        </div>

        <div className="card flex">
          <div className="mr-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Globe className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2">Creative Rates</h3>
            <p className="text-gray-600">
              Enjoy our randomly generated exchange rates for a playful experience.
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
        <h2 className="font-heading font-semibold text-xl text-gray-800 mb-4">Why GlobeRates?</h2>
        <p className="text-gray-700 mb-4">
          We created GlobeRates because we believe travel planning should be fun! While real currency 
          converters are useful tools, sometimes it's nice to take a playful approach to thinking 
          about your next adventure.
        </p>
        <p className="text-gray-700">
          So go ahead, convert some dollars to MangoCoins, save your favorites, and enjoy
          the journey of imagining your travels across the globe!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;