export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

// List of currencies with their codes, names, flags, and symbols
export const currencies: Currency[] = [
  { 
    code: 'USD', 
    name: 'US Dollar', 
    flag: 'https://flagcdn.com/w20/us.png', 
    symbol: '$' 
  },
  { 
    code: 'EUR', 
    name: 'Euro', 
    flag: 'https://flagcdn.com/w20/eu.png', 
    symbol: '€' 
  },
  { 
    code: 'GBP', 
    name: 'British Pound', 
    flag: 'https://flagcdn.com/w20/gb.png', 
    symbol: '£' 
  },
  { 
    code: 'JPY', 
    name: 'Japanese Yen', 
    flag: 'https://flagcdn.com/w20/jp.png', 
    symbol: '¥' 
  },
  { 
    code: 'AUD', 
    name: 'Australian Dollar', 
    flag: 'https://flagcdn.com/w20/au.png', 
    symbol: 'A$' 
  },
  { 
    code: 'CAD', 
    name: 'Canadian Dollar', 
    flag: 'https://flagcdn.com/w20/ca.png', 
    symbol: 'C$' 
  },
  { 
    code: 'CHF', 
    name: 'Swiss Franc', 
    flag: 'https://flagcdn.com/w20/ch.png', 
    symbol: 'Fr' 
  },
  { 
    code: 'CNY', 
    name: 'Chinese Yuan', 
    flag: 'https://flagcdn.com/w20/cn.png', 
    symbol: '¥' 
  },
  { 
    code: 'INR', 
    name: 'Indian Rupee', 
    flag: 'https://flagcdn.com/w20/in.png', 
    symbol: '₹' 
  },
  { 
    code: 'BRL', 
    name: 'Brazilian Real', 
    flag: 'https://flagcdn.com/w20/br.png', 
    symbol: 'R$' 
  },
  { 
    code: 'MXN', 
    name: 'Mexican Peso', 
    flag: 'https://flagcdn.com/w20/mx.png', 
    symbol: '$' 
  },
  { 
    code: 'ZAR', 
    name: 'South African Rand', 
    flag: 'https://flagcdn.com/w20/za.png', 
    symbol: 'R' 
  },
  { 
    code: 'SGD', 
    name: 'Singapore Dollar', 
    flag: 'https://flagcdn.com/w20/sg.png', 
    symbol: 'S$' 
  },
  { 
    code: 'NZD', 
    name: 'New Zealand Dollar', 
    flag: 'https://flagcdn.com/w20/nz.png', 
    symbol: 'NZ$' 
  },
  { 
    code: 'SEK', 
    name: 'Swedish Krona', 
    flag: 'https://flagcdn.com/w20/se.png', 
    symbol: 'kr' 
  },
  // Fun fictional currencies
  { 
    code: 'MNC', 
    name: 'MangoCoins', 
    flag: 'https://flagcdn.com/w20/th.png', 
    symbol: '🥭' 
  },
  { 
    code: 'BNK', 
    name: 'Beach Notes', 
    flag: 'https://flagcdn.com/w20/bs.png', 
    symbol: '🏝️' 
  },
  { 
    code: 'SNW', 
    name: 'Snow Dollars', 
    flag: 'https://flagcdn.com/w20/fi.png', 
    symbol: '❄️' 
  },
  { 
    code: 'DLK', 
    name: 'Desert Laks', 
    flag: 'https://flagcdn.com/w20/ae.png', 
    symbol: '🏜️' 
  },
  { 
    code: 'RCK', 
    name: 'RocketCash', 
    flag: 'https://flagcdn.com/w20/jp.png', 
    symbol: '🚀' 
  }
];

// Generate a random exchange rate between min and max
export const generateRandomRate = (min = 0.5, max = 100) => {
  return Math.random() * (max - min) + min;
};

// Format currency amount based on code
export const formatCurrency = (amount: number, currencyCode: string) => {
  const currency = currencies.find(c => c.code === currencyCode);
  
  if (!currency) return `${amount}`;
  
  // For fictional currencies, show the currency symbol at the start
  if (['MNC', 'BNK', 'SNW', 'DLK', 'RCK'].includes(currencyCode)) {
    return `${currency.symbol} ${amount.toFixed(2)}`;
  }
  
  // For real currencies, format using the Intl.NumberFormat
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Get a currency by its code
export const getCurrency = (code: string): Currency | undefined => {
  return currencies.find(currency => currency.code === code);
};