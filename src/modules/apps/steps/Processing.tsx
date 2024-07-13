import { useEffect } from 'react'

export const Processing = (props: { onNextStep: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onNextStep()
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <div className="space-y-2 py-12 text-center">
        <img
          src="https://i.namu.wiki/i/evOvkNa7iihQOk3klPlUk3i5EmGcgSrPXHC6qzLt3yGNrv3sMfbhzgTbinpbH-5125wBCQSzOjS6N8Twu0QeZg.gif"
          alt="Loading"
          className="mx-auto h-16"
        />
        <p>กำลังประมวลผลข้อมูลโดยใช้ Quantum Computer</p>
      </div>
    </div>
  )
}
