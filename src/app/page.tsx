'use client'
import { ReactPictureAnnotation } from 'react-picture-annotation'
import { IAnnotation } from 'react-picture-annotation/dist/types/src/Annotation'

export default function Home() {
  return (
    <main className="">
      <ReactPictureAnnotation
        image="https://www.khiemle.dev/_next/image?url=%2Fstatic%2Fthumbnails%2F2020%2FHashTable.jpg&w=1200&q=75"
        onSelect={(id: string | null) => {
          console.log(id)
        }}
        onChange={(annotationData: IAnnotation[]) => {
          console.log(annotationData)
        }}
        width={1024}
        height={720}
      />
    </main>
  )
}
