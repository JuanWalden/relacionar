import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Brain className="w-12 h-12 text-blue-500" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-10 h-10 text-red-500" />
        </motion.div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        El Ciclo de Retroalimentación de la Ansiedad
      </h1>
      
      <h2 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
        Taller de Regulación Emocional • Juan Orta
      </h2>
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Comprende cómo cada elemento del ciclo refuerza y amplifica el siguiente, 
        creando un patrón que se autoalimenta y mantiene la ansiedad.
      </p>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl max-w-2xl mx-auto">
        <p className="text-yellow-800 font-medium">
          🎯 <strong>Objetivo:</strong> Identificar los puntos de intervención para romper el ciclo
        </p>
      </div>
    </motion.header>
  );
};

export default Header;