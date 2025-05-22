const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo-bng.png" 
        alt="BNG Metalmecânica" 
        className="h-12 mr-2"
      />
    </div>
  );
};

export default Logo;