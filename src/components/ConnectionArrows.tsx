import React from 'react';
import { motion } from 'framer-motion';
import { CycleStep } from '../types/anxiety';

interface ConnectionArrowsProps {
  activeStep: CycleStep | null;
  isAnimating: boolean;
}

const ConnectionArrows: React.FC<ConnectionArrowsProps> = ({
  activeStep,
  isAnimating,
}) => {
  const arrowPaths = [
    // Flechas principales del ciclo
    { id: 'arrow1', d: 'M 380 120 Q 420 160 400 220', from: 'trigger', to: 'thought' },
    { id: 'arrow2', d: 'M 400 280 Q 380 320 340 340', from: 'thought', to: 'symptom' },
    { id: 'arrow3', d: 'M 280 360 Q 220 360 180 340', from: 'symptom', to: 'behavior' },
    { id: 'arrow4', d: 'M 120 320 Q 80 280 100 220', from: 'behavior', to: 'consequence' },
    { id: 'arrow5', d: 'M 100 160 Q 80 120 120 100', from: 'consequence', to: 'reinforcement' },
    { id: 'arrow6', d: 'M 180 80 Q 220 80 280 100', from: 'reinforcement', to: 'trigger' },
    
    // Flechas de retroalimentación
    { id: 'feedback1', d: 'M 150 300 Q 50 200 150 120', from: 'consequence', to: 'trigger', feedback: true },
    { id: 'feedback2', d: 'M 350 120 Q 450 200 350 300', from: 'symptom', to: 'thought', feedback: true },
  ];

  const getArrowOpacity = (arrow: any) => {
    if (!activeStep && !isAnimating) return 0.3;
    if (isAnimating) return 1;
    
    return arrow.from === activeStep || arrow.to === activeStep ? 1 : 0.2;
  };

  const getArrowColor = (arrow: any) => {
    if (arrow.feedback) return '#e74c3c';
    if (!activeStep && !isAnimating) return '#95a5a6';
    if (isAnimating) return '#2c3e50';
    
    return arrow.from === activeStep || arrow.to === activeStep ? '#2c3e50' : '#bdc3c7';
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 500 400"
      style={{ zIndex: 1 }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="currentColor"
          />
        </marker>
        
        <marker
          id="arrowhead-feedback"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#e74c3c"
          />
        </marker>
      </defs>

      {arrowPaths.map((arrow) => (
        <motion.path
          key={arrow.id}
          d={arrow.d}
          stroke={getArrowColor(arrow)}
          strokeWidth={arrow.feedback ? 2 : 3}
          strokeDasharray={arrow.feedback ? "8,8" : "none"}
          fill="none"
          markerEnd={arrow.feedback ? "url(#arrowhead-feedback)" : "url(#arrowhead)"}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: getArrowOpacity(arrow),
          }}
          transition={{
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
        />
      ))}
    </svg>
  );
};

export default ConnectionArrows;