"use client"
import { useState } from 'react';

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MeuAvatar: React.FC<AvatarProps> = ({ name, src, size = 'md' }) => {
  const [isImageError, setIsImageError] = useState(false);

  // Tamanhos do avatar
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  };

  // Função para pegar as iniciais do nome
  const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    return nameArray.map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${sizeClasses[size]}`}>
      {src && !isImageError ? (
        <img
          src={src}
          alt={name}
          className="object-cover w-full h-full"
          onError={() => setIsImageError(true)}
        />
      ) : (
        <span className="text-white font-semibold">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};

export default MeuAvatar;
