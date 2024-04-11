import React from 'react'

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-5 p-4 gap-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full border rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$6,240</p>
                    <p className='text-gray-600'>Daily Revenue</p>
                </div>
                <p className='bg-green-300 p-2 flex items-center rounded-lg'><span className='text-green-700 text-md'>+18%</span></p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full border rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$13,490</p>
                    <p className='text-gray-600'>YTD Revenue</p>
                </div>
                <p className='bg-green-100 p-2 flex items-center rounded-lg'><span className='text-green-600 text-md'>+6%</span></p>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>1,220</p>
                    <p className='text-gray-600'>Customers</p>
                </div>
                <p className='bg-red-200 p-2 flex items-center rounded-lg'><span className='text-red-700 text-md'>-7%</span></p>
            </div>
        </div>
    )
}

export default TopCards