
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export default function ArrowButton({
  direction,
  onClick,
  disabled = false
}: ArrowButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        pointer-events-auto
        absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2
        z-20
        opacity-0 group-hover:opacity-100 transition-opacity
        bg-white p-2 rounded-full shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <Icon size={24} />
    </button>
  );
}
