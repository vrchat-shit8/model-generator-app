import { useMemo, useState } from 'react';
import Home from './steps/Home';
import { StepTakePhoto } from './steps/StepTakePhoto';

type Step = 'HOME' | 'TAKE_PHOTO' | 'PROCESSING' | 'RESULT';

export const Main = () => {
  const [step, setStep] = useState<Step>('HOME');

  const currentStep = useMemo(() => {
    switch (step) {
      case 'TAKE_PHOTO':
        return <StepTakePhoto />;
      default:
        return <Home />;
    }
  }, [step]);

  return <>{currentStep}</>;
};
