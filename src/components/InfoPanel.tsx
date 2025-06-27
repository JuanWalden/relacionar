import React from 'react';
import { motion } from 'framer-motion';
import { X, Lightbulb, Target, AlertCircle } from 'lucide-react';
import { cycleStepsData } from '../data/cycleData';
import { CycleStep } from '../types/anxiety';

interface InfoPanelProps {
  step: CycleStep;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ step, onClose }) => {
  const data = cycleStepsData[step];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.4 
      }}
      className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 h-fit sticky top-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${data.color} rounded-xl flex items-center justify-center text-2xl`}>
            {data.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
            <p className="text-sm text-gray-500">Paso del ciclo</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Descripción */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">{data.description}</p>
      </div>

      {/* Ejemplos */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-5 h-5 text-orange-500" />
          <h4 className="font-semibold text-gray-800">Ejemplos comunes</h4>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <ul className="space-y-2">
            {data.examples.map((example, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="text-red-500 mt-1">▸</span>
                <span>{example}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tips */}
      {data.tips && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h4 className="font-semibold text-gray-800">Puntos clave</h4>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <ul className="space-y-2">
              {data.tips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start gap-2 text-sm text-yellow-800"
                >
                  <span className="text-yellow-600 mt-1">💡</span>
                  <span>{tip}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Intervenciones */}
      {data.interventions && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-500" />
            <h4 className="font-semibold text-gray-800">Estrategias de intervención</h4>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <ul className="space-y-2">
              {data.interventions.map((intervention, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="flex items-start gap-2 text-sm text-green-800"
                >
                  <span className="text-green-600 mt-1">🎯</span>
                  <span>{intervention}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default InfoPanel;