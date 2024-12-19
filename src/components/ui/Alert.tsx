import React from 'react';

interface AlertProps {
  type: 'error' | 'success' | 'warning';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const bgColor = {
    error: 'bg-red-100 text-red-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700'
  }[type];

  return (
    <div className={`p-4 rounded-md ${bgColor} relative`} role="alert">
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-4"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert; 