import React from 'react'
import MedicalBooksItem from '../MedicalBooksItem/MedicalBooksItem'

function MedicalBooks() {
  return (
    <div className='h-70vh w-full flex flex-col mt-5'>
        <span className='my-2 text-center'>Explore Medical Books</span>
       <div className='flex flex-wrap '> 
     <MedicalBooksItem />
       </div>
    </div>
  )
}

export default MedicalBooks
