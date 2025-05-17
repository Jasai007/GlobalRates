import React, { useState, useEffect } from 'react';
import { Trash2, RefreshCw } from 'lucide-react';
import { FavoritePair, getFavorites, removeFavorite } from '../../utils/localStorage';
import { generateRandomRate, formatCurrency } from '../../utils/currencyData';

const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoritePair[]>([]);
  const [refreshing, setRefreshing] = useState<string | null>(null);

  useEffect(() => {
    // Load favorites on component mount
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const loadedFavorites = getFavorites();
    setFavorites(loadedFavorites);
  };

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id);
    loadFavorites();
  };

  const handleRefreshRate = (id: string) => {
    setRefreshing(id);
    
    // Simulate fetching a new rate
    setTimeout(() => {
      const updatedFavorites = favorites.map(fav => {
        if (fav.id === id) {
          return {
            ...fav,
            lastRate: generateRandomRate(0.5, 100),
            date: new Date().toISOString()
          };
        }
        return fav;
      });
      
      // Update local storage
      localStorage.setItem('globerates-favorites', JSON.stringify(updatedFavorites));
      
      // Update state
      setFavorites(updatedFavorites);
      setRefreshing(null);
    }, 800);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (favorites.length === 0) {
    return (
      <div className="card text-center py-12">
        <h3 className="font-heading font-semibold text-xl text-gray-700 mb-4">
          No favorites yet
        </h3>
        <p className="text-gray-600 mb-6">
          Start converting currencies and save your favorites for quick access!
        </p>
        <img 
          src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
          alt="No favorites illustration" 
          className="max-w-xs mx-auto"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {favorites.map((favorite) => (
          <div 
            key={favorite.id} 
            className="card border border-gray-200 transition-all hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img 
                  src={favorite.fromCurrency.flag} 
                  alt={favorite.fromCurrency.code}
                  className="h-6 w-8 object-cover rounded-sm mr-2"
                />
                <span className="font-medium">{favorite.fromCurrency.code}</span>
                <span className="mx-2 text-gray-400">to</span>
                <img 
                  src={favorite.toCurrency.flag} 
                  alt={favorite.toCurrency.code}
                  className="h-6 w-8 object-cover rounded-sm mr-2"
                />
                <span className="font-medium">{favorite.toCurrency.code}</span>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleRefreshRate(favorite.id)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  title="Refresh rate"
                  disabled={refreshing === favorite.id}
                >
                  <RefreshCw className={`h-4 w-4 ${refreshing === favorite.id ? 'animate-spin' : ''}`} />
                </button>
                
                <button 
                  onClick={() => handleRemoveFavorite(favorite.id)}
                  className="p-1.5 rounded-full hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                  title="Remove from favorites"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rate:</span>
                <span className="font-semibold">
                  1 {favorite.fromCurrency.code} = {favorite.lastRate.toFixed(4)} {favorite.toCurrency.code}
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-600">Example:</span>
                <span>
                  {formatCurrency(100, favorite.fromCurrency.code)} = {formatCurrency(100 * favorite.lastRate, favorite.toCurrency.code)}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-right">
              Last updated: {formatDate(favorite.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;