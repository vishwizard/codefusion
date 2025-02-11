import React from 'react'

export default function CardSection() {
    return (
        <div className='flex flex-col items-center py-4'>

            <div className='text-center'>

                <h2 className='text-6xl mb-6 '>Manage your entire community <br /> in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>


            <div className='flex '>
                <div className='flex flex-col px-4 items-center gap-4'>
                    <img className='size-24' src='Community.png' />
                    <h2 className='text-4xl font-bold flex-wrap text-Sitetext'>Membership <br/> Organisations</h2>
                    <p className='text-center px-10'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='flex flex-col px-4 items-center gap-4'>
                    <img className='size-24' src='Building.png' />
                    <h2 className='text-4xl font-bold flex-wrap text-Sitetext'>National <br/> Associations</h2>
                    <p className='text-center px-10'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='flex flex-col px-4 items-center gap-4'>
                    <img className='size-24' src='Hand.png' />
                    <h2 className='text-4xl font-bold flex-wrap text-Sitetext'>Clubs & <br/> Groups</h2>
                    <p className='text-center px-10'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>

        </div>
    )
}
