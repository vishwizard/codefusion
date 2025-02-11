import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around items-center py-4'>
        <div className='w-64'><img src='Logo.png'/></div>
        <div>
<ul className='flex gap-5'>
    <li>
        <a>Home</a>
    </li>
    <li>
        <a>Service</a>
    </li>
    <li>
        <a>Feature</a>
    </li>
    <li>
        <a>Product</a>
    </li>
    <li>
        <a>Testimonial</a>
    </li>
    <li>
        <a>FAQ</a>
    </li>
</ul>

        </div>
        <div className='flex gap-4 items-center'>
            <div className='text-siteGreen'><button>Login</button></div>
            <div className='bg-siteGreen rounded-md p-3 text-white'><button>Sign Up</button></div>
        </div>
    </div>
  )
}
