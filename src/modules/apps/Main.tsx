import { useMemo, useState } from 'react'
import Home from './steps/Home'
import { StepTakePhoto } from './steps/StepTakePhoto'
import { Result } from '@/modules/apps/steps/Result'

type Step = 'HOME' | 'TAKE_PHOTO' | 'PROCESSING' | 'RESULT'

export const Main = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [step, setStep] = useState<Step>('TAKE_PHOTO')

  const currentStep = useMemo(() => {
    switch (step) {
      case 'RESULT':
        return <Result image={currentImage ?? ''} />
      case 'TAKE_PHOTO':
        return (
          <StepTakePhoto
            onTakePhoto={value => {
              setCurrentImage(value)
              setStep('RESULT')
            }}
          />
        )
      default:
        return <Home />
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  return <>{currentStep}</>
}
