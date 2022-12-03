import React, {useEffect, useState} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';

export default function Movie() {

    const movie = [
        {
            title: 'test', 
            duration: 120,
            img: 'testtttt'
        }, 
        
        {
            title: 'test2', 
            duration: 90,
            img: 'testtttt'
        }
    ]

    useEffect (()=> {
        Aos.init({duration: 2000})
      }, [])

      const [show, setShow] = useState(false)
    
    
  return (
    <div>
        <main className='main'>
        <div data-aos="fade-right" className='main__popularText' >Najlepsze filmy. Sprawdź szczegóły
            <div className="main__popularText-underline"></div>
        </div>
        {
            movie.map((el, index) =>  {
                return (
                    <div key={index} className="main__card">
                        <div className="main__card-wrapper">
                            <div className="main__card-wrapper--box">
                                <div>Tutył: {el.title}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </main>
    </div>
  )
}
