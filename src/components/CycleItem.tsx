import React from 'react';
import { motion } from 'framer-motion';
import { CycleStepData } from '../types/anxiety';

interface CycleItemProps {
  step: CycleStepData;
  isActive: boolean;
  isAnimating: boolean;
  onClick: () => void;
  delay: number;
}

const CycleItem: React.FC<CycleItemProps> = ({
  step,
  isActive,
  isAnimating,
  onClick,
  delay,
}) => {
  // Calcular posición en círculo
  const angle = (360 / 6) * Object.values(step).indexOf(step);
  const radius = 180; // Radio del círculo en pixels
  const centerX = 50; // Centro en porcentaje
  const centerY = 50; // Centro en porcentaje
  
  const x = centerX + (radius / 4) * Math.cos((angle - 90) * Math.PI / 180);
  const y = centerY + (radius / 4) * Math.sin((angle - 90) * Math.PI / 180);

  return (
    <motion.div
      className={`absolute w-24 h-24 md:w-32 md:h-32 ${step.color} rounded-2xl 
                  flex flex-col items-center justify-center text-white font-semibold 
                  text-center cursor-pointer shadow-lg transition-all duration-300
                  ${isActive ? 'ring-4 ring-white ring-opacity-70 z-20' : 'z-10'}`}
      style={{
        left: `${step.position.x}%`,
        top: `${step.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.15 : 1,
        y: isActive ? -8 : 0,
      }}
      transition={{ 
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        scale: isAnimating ? 1 : 1.1, 
        y: isAnimating ? 0 : -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="text-2xl md:text-3xl mb-1"
        animate={isActive ? { 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1]
        } : {}}
        transition={{ duration: 0.6, repeat: isActive ? Infinity : 0, repeatDelay: 2 }}
      >
        {step.icon}
      </motion.div>
      
      <div className="text-xs md:text-sm leading-tight px-1">
        {step.title.split(' ').map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>

      {/* Indicador de actividad */}
      {isActive && (
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default CycleItem;