import Image from 'next/image'
import img from '@/public/1.jpg'

export default function PetsPage() {
  return (
    <div>    
      <Image src={img} placeholder='blur' alt='pet' width='300' height='300'/>

      {
      ['1', '2', '3', '4', '5'].map( path => {
        return (
          <>
            <div key={path}>
              <Image src={`/${path}.jpg`} alt='pet' width='300' height='300'/>
            </div>
          </>
        )
      })
    }
    </div>
  )
}