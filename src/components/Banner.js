import React from 'react'

export default function Banner() {
  return (
    <div className='flex justify-around items-center bg-siteBG px-20'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-8xl'>Lessons and insights </h2>
            <h3 className='text-siteGreen text-6xl'>from 8 years</h3>
            <p>where to grow your business as a photographer: site or social media?</p>
            <div className=''><button className='bg-siteGreen  rounded-md p-3 text-white'>Register</button></div>
        </div>
        <div><img src='Banner2.png'/></div>
    </div>
  )
}
