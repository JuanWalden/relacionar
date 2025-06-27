import React from 'react';
import { motion } from 'framer-motion';
import { cycleStepsData } from '../data/cycleData';
import { CycleStep } from '../types/anxiety';
import CycleItem from './CycleItem';
import ConnectionArrows from './ConnectionArrows';

interface CycleVisualizationProps {
  activeStep: CycleStep | null;
  isAnimating: boolean;
  onStepClick: (step: CycleStep) => void;
}

const CycleVisualization: React.FC<CycleVisualizationProps> = ({
  activeStep,
  isAnimating,
  onStepClick,
}) => {
  const steps = Object.values(cycleStepsData);

  return (
    <div className="relative">
      {/* Título de la visualización */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Visualización Interactiva del Ciclo
        </h3>
        <p className="text-gray-600">
          Haz clic en cada elemento para explorar en detalle
        </p>
      </div>

      {/* Contenedor principal del ciclo */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Área de visualización responsive */}
        <div className="relative aspect-square max-w-2xl mx-auto">
          {/* Círculo central */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500 to-red-600 
                       rounded-full flex items-center justify-center text-white font-bold 
                       text-center shadow-2xl cursor-pointer z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isAnimating ? { 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 10px 30px rgba(239, 68, 68, 0.3)",
                "0 20px 40px rgba(239, 68, 68, 0.5)",
                "0 10px 30px rgba(239, 68, 68, 0.3)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
            onClick={() => !isAnimating && onStepClick('trigger')}
          >
            <div className="text-sm md:text-base">
              <div className="text-2xl mb-1">🧠</div>
              <div>TU</div>
              <div>ANSIEDAD</div>
            </div>
          </motion.div>

          {/* Flechas de conexión */}
          <ConnectionArrows activeStep={activeStep} isAnimating={isAnimating} />

          {/* Elementos del ciclo */}
          {steps.map((step, index) => (
            <CycleItem
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              isAnimating={isAnimating}
              onClick={() => onStepClick(step.id)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Indicador de flujo */}
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                       bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⚡ Observa cómo se conecta cada paso...
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CycleVisualization;