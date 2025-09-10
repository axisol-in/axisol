import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded transition-colors duration-200 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;