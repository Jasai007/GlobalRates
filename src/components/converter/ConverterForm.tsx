import { useState, useEffect } from 'react';
import { ArrowDown, Loader2, Heart } from 'lucide-react';
import { Currency, currencies } from '../../utils/currencyData';
import CurrencySelect from '../ui/CurrencySelect';
import AmountInput from '../ui/AmountInput';
import useCurrencyConverter from '../../hooks/useCurrencyConverter';
import { saveFavorite, isFavorite } from '../../utils/localStorage';

interface ConverterFormProps {
  onConversionResult?: (result: any) => void;
}

const ConverterForm: React.FC<ConverterFormProps> = ({ onConversionResult }) => {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  
  const { 
    convert, 
    isConverting, 
    result, 
    error, 
    clearError 
  } = useCurrencyConverter();

  // Check if the current pair is already favorited
  useEffect(() => {
    setIsFavorited(isFavorite(fromCurrency, toCurrency));
  }, [fromCurrency, toCurrency]);
  
  // Pass conversion result up to parent component if needed
  useEffect(() => {
    if (result && onConversionResult) {
      onConversionResult(result);
    }
  }, [result, onConversionResult]);

  const handleAmountChange = (value: number) => {
    setAmount(value);
    clearError();
  };

  const handleFromCurrencyChange = (code: string) => {
    setFromCurrency(code);
    clearError();
  };

  const handleToCurrencyChange = (code: string) => {
    setToCurrency(code);
    clearError();
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    clearError();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await convert(amount, fromCurrency, toCurrency);
    } catch (err) {
      // Error already handled in the hook
    }
  };

  const handleAddToFavorites = () => {
    if (!result) return;
    
    const fromCurrencyObj = currencies.find(c => c.code === fromCurrency) as Currency;
    const toCurrencyObj = currencies.find(c => c.code === toCurrency) as Currency;
    
    saveFavorite(fromCurrencyObj, toCurrencyObj, result.rate);
    setIsFavorited(true);
  };

  return (
    <div className="card">
      <h2 className="font-heading font-semibold text-xl text-gray-800 mb-6">
        Currency Converter
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <CurrencySelect 
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <CurrencySelect 
              value={toCurrency}
              onChange={handleToCurrencyChange}
            />
          </div>
        </div>
        
        <div className="relative mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <AmountInput 
            value={amount}
            onChange={handleAmountChange}
            currencyCode={fromCurrency}
          />
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}
        
        <div className="flex items-center gap-4 mb-6">
          <button 
            type="submit"
            className="btn-primary flex-grow"
            disabled={isConverting}
          >
            {isConverting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Converting...
              </>
            ) : 'Convert'}
          </button>
          
          <button 
            type="button"
            onClick={handleSwapCurrencies}
            className="btn-secondary p-2 aspect-square"
            title="Swap currencies"
            disabled={isConverting}
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </form>
      
      {result && (
        <div className="mt-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-heading font-semibold text-gray-700">
                Conversion Result
              </h3>
              
              <button 
                onClick={handleAddToFavorites}
                disabled={isFavorited}
                className={`p-2 rounded-full transition-colors ${
                  isFavorited 
                    ? 'bg-pink-100 text-pink-500 cursor-not-allowed' 
                    : 'bg-gray-100 text-gray-500 hover:bg-pink-100 hover:text-pink-500'
                }`}
                title={isFavorited ? 'Already in favorites' : 'Add to favorites'}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? 'fill-pink-500' : ''}`} />
              </button>
            </div>
            
            <div className="mb-3">
              <p className="text-lg">
                <span className="font-semibold">{amount.toLocaleString()}</span> {result.fromCurrency.code} =
              </p>
              <p className="text-2xl font-bold text-blue-700">
                {result.toAmount.toLocaleString(undefined, {maximumFractionDigits: 2})} {result.toCurrency.code}
              </p>
            </div>
            
            <p className="text-sm text-gray-500">
              1 {result.fromCurrency.code} = {result.rate.toFixed(4)} {result.toCurrency.code}
            </p>
          </div>
          
          <p className="text-xs text-gray-500 italic text-center">
            Disclaimer: These rates are made up. Travel safe!
          </p>
        </div>
      )}
    </div>
  );
};

export default ConverterForm;