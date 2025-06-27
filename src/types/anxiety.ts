export type CycleStep = 'trigger' | 'thought' | 'symptom' | 'behavior' | 'consequence' | 'reinforcement';

export interface CycleStepData {
  id: CycleStep;
  title: string;
  icon: string;
  description: string;
  examples: string[];
  color: string;
  position: {
    x: number;
    y: number;
  };
  tips?: string[];
  interventions?: string[];
}

export interface AnimationState {
  isActive: boolean;
  currentStep: number;
  direction: 'forward' | 'backward';
}