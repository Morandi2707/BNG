import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{title}</h2>
      {subtitle && (
        <div className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </div>
      )}
      <div className={`h-1 w-24 bg-accent mt-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;