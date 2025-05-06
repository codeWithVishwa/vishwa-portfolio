import React, { useEffect, useState } from 'react'
import '../../src/index.css';

export const LoadingScreen = ({onComplete}) => {
   const [text,setText]=useState('')
   const fulltext="< Welcome />"

  useEffect(()=>{
    let index=0
    const interval=setInterval(()=>{
      setText(fulltext.substring(0,index))
      index++;

      if(index>fulltext.length){
        clearInterval(interval)
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    },100);
    return ()=>clearInterval(interval)
  },[onComplete])

  return (
    <div className='fixed inset-0 z-50 bg-back text-gray-100 flex flex-col items-center justify-center'>
        <div className='mb-4 text-4xl font-mono font-bold'>
            {text} <span className='animate-blink ml-1'>|</span>
            </div>
            <div className="relative w-[30%] h-1 bg-gray-200 overflow-hidden rounded">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 animation-loading-bar w-1/3"></div>
    </div>


    </div>
    
  )
}
