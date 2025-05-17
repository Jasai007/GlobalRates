import React from 'react';
import ConverterForm from '../components/converter/ConverterForm';
import { Globe, TrendingUp, Compass } from 'lucide-react';

const ConvertPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="bg-blue-100 p-2 rounded-full mr-4">
          <TrendingUp className="h-6 w-6 text-blue-500" />
        </div>
        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-gray-800">
          Currency Converter
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ConverterForm />
        </div>
        
        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-heading font-semibold text-gray-800">
                Popular Conversions
              </h3>
            </div>
            
            <ul className="space-y-3 text-sm">
              <li className="p-2 hover:bg-blue-100 rounded-md transition-colors">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/us.png" 
                      alt="USD" 
                      className="h-4 w-5 mr-2"
                    />
                    <span>USD to EUR</span>
                  </div>
                  <span className="font-medium">0.92 €</span>
                </div>
              </li>
              
              <li className="p-2 hover:bg-blue-100 rounded-md transition-colors">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/eu.png" 
                      alt="EUR" 
                      className="h-4 w-5 mr-2"
                    />
                    <span>EUR to GBP</span>
                  </div>
                  <span className="font-medium">0.85 £</span>
                </div>
              </li>
              
              <li className="p-2 hover:bg-blue-100 rounded-md transition-colors">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/jp.png" 
                      alt="JPY" 
                      className="h-4 w-5 mr-2"
                    />
                    <span>JPY to USD</span>
                  </div>
                  <span className="font-medium">0.0073 $</span>
                </div>
              </li>
              
              <li className="p-2 hover:bg-blue-100 rounded-md transition-colors">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/th.png" 
                      alt="MNC" 
                      className="h-4 w-5 mr-2"
                    />
                    <span>MNC to SNW</span>
                  </div>
                  <span className="font-medium">❄️ 12.5</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-4">
              <Compass className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-heading font-semibold text-gray-800">
                Traveler Tips
              </h3>
            </div>
            
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>Convert small amounts first to get familiar with local currency values.</p>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>Check if your favorite currency pair is saved for quick access later.</p>
              </li>
              
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>Remember these rates are fictional, just for fun! Don't use for actual travel planning.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-heading font-semibold text-yellow-800 text-sm mb-2">
              Disclaimer
            </h3>
            <p className="text-yellow-700 text-xs">
              GlobeRates provides fictional currency conversion for entertainment purposes only. 
              Rates are randomly generated and should not be used for financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;