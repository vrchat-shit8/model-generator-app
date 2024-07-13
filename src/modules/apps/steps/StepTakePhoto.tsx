import { useRef } from 'react'
import { Camera } from 'react-camera-pro'

export const StepTakePhoto = (props: {
  onTakePhoto: (image: string) => void
}) => {
  const camera = useRef(null)

  return (
    <div className="container space-y-4">
      <h1 className="text-2xl">
        แสกนหน้าของคุณเพื่อสร้าง โมเดลที่สวยที่สุดสำหรับคุณ
      </h1>
      <div className="border">
        <div className="aspect-photo relative">
          <Camera
            ref={camera}
            errorMessages={{
              noCameraAccessible: undefined,
              permissionDenied: undefined,
              switchCamera: undefined,
              canvas: undefined,
            }}
          />
          <img
            src="/frame.svg"
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
      </div>
      <button
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const result = camera?.current?.takePhoto()
          if (result) {
            props.onTakePhoto(result)
          }
        }}
      >
        ถ่ายรูป
      </button>
    </div>
  )
}
