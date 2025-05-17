import React from 'react';
import { getCurrency } from '../../utils/currencyData';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  currencyCode: string;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange, currencyCode }) => {
  const currency = getCurrency(currencyCode);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) || e.target.value === '') {
      onChange(e.target.value === '' ? 0 : newValue);
    }
  };

  return (
    <div className="relative">
      <input
        type="number"
        className="input-field pl-10"
        value={value || ''}
        onChange={handleChange}
        min="0"
        step="any"
        placeholder="Enter amount"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500">
          {currency?.symbol || currencyCode}
        </span>
      </div>
    </div>
  );
};

export default AmountInput;