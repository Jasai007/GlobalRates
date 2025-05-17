import { Currency } from './currencyData';

export interface FavoritePair {
  id: string;
  fromCurrency: Currency;
  toCurrency: Currency;
  lastRate: number;
  date: string;
}

// Save a favorite currency pair to local storage
export const saveFavorite = (fromCurrency: Currency, toCurrency: Currency, rate: number): void => {
  try {
    // Get existing favorites
    const favorites = getFavorites();
    
    // Create a unique ID
    const id = `${fromCurrency.code}-${toCurrency.code}-${Date.now()}`;
    
    // Create the new favorite
    const newFavorite: FavoritePair = {
      id,
      fromCurrency,
      toCurrency,
      lastRate: rate,
      date: new Date().toISOString(),
    };
    
    // Check for duplicates (same currency pair)
    const isDuplicate = favorites.some(
      fav => 
        fav.fromCurrency.code === fromCurrency.code && 
        fav.toCurrency.code === toCurrency.code
    );
    
    // If not a duplicate, add to favorites
    if (!isDuplicate) {
      favorites.push(newFavorite);
      localStorage.setItem('globerates-favorites', JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

// Get all favorite currency pairs from local storage
export const getFavorites = (): FavoritePair[] => {
  try {
    const favorites = localStorage.getItem('globerates-favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    return [];
  }
};

// Remove a favorite currency pair from local storage
export const removeFavorite = (id: string): void => {
  try {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem('globerates-favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

// Check if a pair is already in favorites
export const isFavorite = (fromCode: string, toCode: string): boolean => {
  try {
    const favorites = getFavorites();
    return favorites.some(
      fav => 
        fav.fromCurrency.code === fromCode && 
        fav.toCurrency.code === toCode
    );
  } catch (error) {
    console.error('Error checking favorite status:', error);
    return false;
  }
};