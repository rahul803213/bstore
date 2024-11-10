import React from 'react'

interface props {
    text: string;
}

const Button: React.FC<props> = ({text}) => {
  return (
    <button className='bg-blue-500 text-white leading-9 px-9 rounded-full capitalize'>{text}</button>
  )
}

export default Button