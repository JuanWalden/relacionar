import React from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Pause } from 'lucide-react';

interface ControlsProps {
  onStartAnimation: () => void;
  onReset: () => void;
  isAnimating: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  onStartAnimation,
  onReset,
  isAnimating,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.button
        onClick={onStartAnimation}
        disabled={isAnimating}
        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 
                   ${isAnimating 
                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                     : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5'
                   }`}
        whileHover={!isAnimating ? { scale: 1.02 } : {}}
        whileTap={!isAnimating ? { scale: 0.98 } : {}}
      >
        {isAnimating ? (
          <>
            <Pause className="w-5 h-5" />
            <span>Animación en curso...</span>
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            <span>Ver animación completa</span>
          </>
        )}
      </motion.button>

      <motion.button
        onClick={onReset}
        className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold 
                   bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-200 
                   hover:shadow-md hover:-translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <RotateCcw className="w-5 h-5" />
        <span>Reiniciar vista</span>
      </motion.button>

      {/* Instrucciones */}
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-600 max-w-xs">
          💡 <strong>Tip:</strong> Haz clic en cualquier elemento del ciclo para explorar en detalle
        </p>
      </div>
    </motion.div>
  );
};

export default Controls;