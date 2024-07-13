import { useMemo, useState } from 'react'
import Home from './steps/Home'
import { StepTakePhoto } from './steps/StepTakePhoto'
import { Result } from '@/modules/apps/steps/Result'
import { Processing } from '@/modules/apps/steps/Processing'

type Step = 'HOME' | 'TAKE_PHOTO' | 'PROCESSING' | 'RESULT'

export const Main = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [step, setStep] = useState<Step>('HOME')

  const currentStep = useMemo(() => {
    switch (step) {
      case 'RESULT':
        return <Result image={currentImage ?? ''} />
      case 'PROCESSING':
        return <Processing onNextStep={() => setStep('RESULT')} />
      case 'TAKE_PHOTO':
        return (
          <StepTakePhoto
            onTakePhoto={value => {
              setCurrentImage(value)
              setStep('PROCESSING')
            }}
          />
        )
      default:
        return <Home onNextStep={() => setStep('TAKE_PHOTO')} />
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  return <>{currentStep}</>
}
