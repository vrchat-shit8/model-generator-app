import { sampleImage } from '@/libs/sample'
import { Render } from '@/modules/apps/3DRender'
import { useEffect, useState } from 'react'

function cropImage(imageSrc: string) {
  const cropX = -220
  const cropY = -80
  const cropWidth = 750
  const cropHeight = 490
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()

  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = 300
      canvas.height = 300
      ctx?.drawImage(img, cropX, cropY, cropWidth, cropHeight)

      canvas.toBlob(blob => {
        const reader = new FileReader()
        reader.readAsDataURL(blob as Blob)
        reader.onloadend = () => {
          const base64data = reader.result
          resolve(base64data)
        }
      }, 'image/jpeg')
    }
    img.onerror = reject
    img.src = imageSrc
  })
}

export const Result = (props: { image: string }) => {
  const [file, setFile] = useState<string | null>(null)

  useEffect(() => {
    cropImage(props.image).then(result => {
      setFile(result as string)
    })

    return () => {
      if (file) {
        URL.revokeObjectURL(file)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleImage])

  return (
    <div className="container space-y-4 py-6">
      <div className="space-y-0.5">
        <h1 className="text-2xl">ทำรูปให้แล้วคับ</h1>
        <p>และนี่คือผลลัพธ์จากรูปของคุณ เท่ป่ะ</p>
      </div>
      <div className="h-[500px]">{file && <Render image={file} />}</div>
      <button
        className="z-10"
        onClick={() => {
          window.location.reload()
        }}
      >
        ถ่ายรูปใหม่
      </button>
    </div>
  )
}
