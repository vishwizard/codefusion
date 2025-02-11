import React from 'react'

export default function Banner02() {
  return (
    <div className='flex justify-around items-center  px-20'>
      <div><img src='SecondBanner.png'/></div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-4xl text-Sitetext font-semibold'>The unseen of spending three <br/>years at Pixelgrade </h2>
            {/* <h3 className='text-siteGreen text-6xl'>from 8 years</h3> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <div className=''><button className='bg-siteGreen  rounded-md p-3 text-white'>Learn More</button></div>
        </div>
        
    </div>
  )
}
