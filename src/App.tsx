import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CycleVisualization from './components/CycleVisualization';
import InfoPanel from './components/InfoPanel';
import Controls from './components/Controls';
import Legend from './components/Legend';
import ProgressIndicator from './components/ProgressIndicator';
import { CycleStep } from './types/anxiety';

function App() {
  const [activeStep, setActiveStep] = useState<CycleStep | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const steps: CycleStep[] = ['trigger', 'thought', 'symptom', 'behavior', 'consequence', 'reinforcement'];

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);
    setActiveStep(null);
    setShowInfoPanel(false);
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step);
        setAnimationStep(index + 1);
        setShowInfoPanel(true);
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      }, index * 2500);
    });
  };

  const resetView = () => {
    setActiveStep(null);
    setIsAnimating(false);
    setAnimationStep(0);
    setShowInfoPanel(false);
  };

  const handleStepClick = (step: CycleStep) => {
    if (!isAnimating) {
      setActiveStep(step);
      setShowInfoPanel(true);
      setAnimationStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
          {/* Visualización principal */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <CycleVisualization
                activeStep={activeStep}
                isAnimating={isAnimating}
                onStepClick={handleStepClick}
              />
              
              <div className="mt-8 space-y-6">
                <ProgressIndicator 
                  currentStep={animationStep} 
                  totalSteps={steps.length}
                  isAnimating={isAnimating}
                />
                
                <Controls
                  onStartAnimation={startAnimation}
                  onReset={resetView}
                  isAnimating={isAnimating}
                />
                
                <Legend />
              </div>
            </motion.div>
          </div>

          {/* Panel de información */}
          <div className="xl:col-span-1">
            <AnimatePresence mode="wait">
              {showInfoPanel && activeStep && (
                <InfoPanel
                  step={activeStep}
                  onClose={() => setShowInfoPanel(false)}
                />
              )}
            </AnimatePresence>
            
            {!showInfoPanel && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-fit"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Explora el Ciclo
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Haz clic en cualquier elemento del ciclo para obtener información detallada, 
                    o usa la animación completa para ver cómo se conectan todos los pasos.
                  </p>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-700 font-medium">
                      💡 Tip: Cada elemento del ciclo refuerza al siguiente, 
                      creando un patrón que se autoalimenta.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;