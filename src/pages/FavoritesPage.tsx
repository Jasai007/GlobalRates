import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FavoritesList from '../components/favorites/FavoritesList';

const FavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="bg-pink-100 p-2 rounded-full mr-4">
          <Heart className="h-6 w-6 text-pink-500" />
        </div>
        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-gray-800">
          Your Favorite Currencies
        </h1>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          Quick access to your saved currency pairs. Refresh rates anytime or remove pairs you no longer need.
        </p>
      </div>

      <FavoritesList />

      <div className="mt-8 text-center">
        <button 
          onClick={() => navigate('/convert')}
          className="btn-primary"
        >
          Convert New Pair
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FavoritesPage;