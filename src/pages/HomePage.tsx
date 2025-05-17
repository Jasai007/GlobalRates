import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Briefcase, Map } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <Globe className="h-20 w-20 text-blue-500" strokeWidth={1.5} />
          <div className="absolute -top-2 -right-2 bg-yellow-100 rounded-full p-2">
            <Briefcase className="h-6 w-6 text-orange-400" />
          </div>
        </div>
        
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-gray-800 mb-4">
          Explore fake exchange rates <br className="hidden md:block" /> across the globe
        </h1>
        
        <p className="text-gray-600 max-w-xl mb-8 text-lg leading-relaxed">
          Plan your travels with our playful currency converter. 
          Compare made-up rates between different countries and save your favorites for later!
        </p>
        
        <button 
          onClick={() => navigate('/convert')}
          className="btn-primary text-lg group"
        >
          Start Converting
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 bg-white rounded-xl shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-800 mb-8 text-center">
            Everything you need for fun travel planning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Global Coverage</h3>
              <p className="text-gray-600">
                Convert between any made-up currencies from around the world.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Map className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Travel Ready</h3>
              <p className="text-gray-600">
                Save your favorite currency pairs for quick access during your trips.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Fun Interface</h3>
              <p className="text-gray-600">
                Enjoy our playful design while planning your next adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 mt-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-md text-white text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
          Ready to explore fictional currencies?
        </h2>
        <p className="mb-6 max-w-lg mx-auto">
          Jump in and start converting between different currencies with our fun converter.
        </p>
        <button 
          onClick={() => navigate('/convert')}
          className="bg-white text-blue-500 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition-all duration-200 inline-flex items-center"
        >
          Try It Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>
    </div>
  );
};

export default HomePage;