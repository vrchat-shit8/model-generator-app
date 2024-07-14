import { useMemo, useState } from 'react'
import Home from './steps/Home'
import { StepTakePhoto } from './steps/StepTakePhoto'
import { Result } from '@/modules/apps/steps/Result'
import { Processing } from '@/modules/apps/steps/Processing'
import { motion, AnimatePresence } from 'framer-motion'

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

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="h-screen"
          exit={{
            scale: 0,
            rotate: 999,
            transition: {
              duration: 0.4,
            },
          }}
          initial={{
            scale: 0,
            rotate: 999,
          }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.4,
            },
          }}
          key={
            step === 'RESULT'
              ? 'TAKE_PHOTO'
              : step === 'PROCESSING'
                ? 'TAKE_PHOTO'
                : step === 'TAKE_PHOTO'
                  ? 'TAKE_PHOTO'
                  : 'HOME'
          }
        >
          {currentStep}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
