import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  fullWidth = false,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'font-medium transition-all duration-300 rounded flex items-center justify-center';

  const sizeClasses = {
    sm: 'text-sm py-1 px-4',
    md: 'py-2 px-6',
    lg: 'text-lg py-3 px-8',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const getStyle = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: '#f5cb0d',
        color: '#000',
      };
    }

    if (variant === 'outline') {
      return {
        border: '2px solid #f5cb0d',
        color: '#f5cb0d',
      };
    }

    if (variant === 'secondary') {
      return {
        backgroundColor: '#000',
        color: '#f5cb0d',
      };
    }

    return {};
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${widthClass} ${className}`;
  const iconElement = icon ? <span className="mr-2">{icon}</span> : null;

  if (href) {
    return (
      <a href={href} className={buttonClasses} style={getStyle()}>
        {iconElement}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} style={getStyle()}>
      {iconElement}
      {children}
    </button>
  );
};

export default Button;
