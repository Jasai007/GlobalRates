import { useState, useCallback } from 'react';
import { Currency, generateRandomRate, getCurrency } from '../utils/currencyData';

interface ConversionResult {
  fromAmount: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  toAmount: number;
  rate: number;
  timestamp: Date;
}

export const useCurrencyConverter = () => {
  const [isConverting, setIsConverting] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convert = useCallback((
    amount: number, 
    fromCurrencyCode: string, 
    toCurrencyCode: string
  ): Promise<ConversionResult> => {
    return new Promise((resolve, reject) => {
      setIsConverting(true);
      setError(null);
      
      // Basic validation
      if (!amount || amount <= 0) {
        setIsConverting(false);
        setError('Please enter a valid amount');
        reject('Invalid amount');
        return;
      }
      
      if (fromCurrencyCode === toCurrencyCode) {
        setIsConverting(false);
        setError('Please select different currencies');
        reject('Same currency selected');
        return;
      }
      
      const fromCurrency = getCurrency(fromCurrencyCode);
      const toCurrency = getCurrency(toCurrencyCode);
      
      if (!fromCurrency || !toCurrency) {
        setIsConverting(false);
        setError('Invalid currency selected');
        reject('Invalid currency');
        return;
      }
      
      // Simulate API call with a timeout
      setTimeout(() => {
        try {
          // Generate a random rate between the currencies
          const rate = generateRandomRate(0.5, 100);
          
          // Calculate converted amount
          const toAmount = amount * rate;
          
          const conversionResult: ConversionResult = {
            fromAmount: amount,
            fromCurrency,
            toCurrency,
            toAmount,
            rate,
            timestamp: new Date()
          };
          
          setResult(conversionResult);
          setIsConverting(false);
          resolve(conversionResult);
        } catch (err) {
          setError('An error occurred during conversion');
          setIsConverting(false);
          reject(err);
        }
      }, 800); // Simulate a small delay
    });
  }, []);

  return {
    convert,
    isConverting,
    result,
    error,
    clearResult: () => setResult(null),
    clearError: () => setError(null)
  };
};

export default useCurrencyConverter;