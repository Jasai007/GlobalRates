import React from 'react';
import { currencies } from '../../utils/currencyData';

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <select
        className="select-field pl-10 appearance-none"
        value={value}
        onChange={handleChange}
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
      
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {value && (
          <img
            src={currencies.find(c => c.code === value)?.flag}
            alt={`${value} flag`}
            className="h-4 w-6 object-cover rounded-sm"
          />
        )}
      </div>
      
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CurrencySelect;