import React from 'react';
import { motion } from 'framer-motion';

const Legend: React.FC = () => {
  const legendItems = [
    { color: 'bg-red-500', label: 'Disparador', icon: '⚡' },
    { color: 'bg-blue-500', label: 'Proceso mental', icon: '💭' },
    { color: 'bg-orange-500', label: 'Respuesta física', icon: '💓' },
    { color: 'bg-green-500', label: 'Acción', icon: '🔍' },
    { color: 'bg-purple-500', label: 'Resultado', icon: '🔄' },
    { color: 'bg-gray-700', label: 'Refuerzo', icon: '➕' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-gray-50 rounded-2xl p-6"
    >
      <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Leyenda del Ciclo
      </h4>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {legendItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white text-sm`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="text-sm text-blue-800 text-center">
          <strong>Recuerda:</strong> Las flechas punteadas representan bucles de retroalimentación 
          que refuerzan y mantienen el ciclo activo.
        </p>
      </div>
    </motion.div>
  );
};

export default Legend;