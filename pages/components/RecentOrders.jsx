import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { data } from '../../data/data'
const RecentOrders = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-auto'>
            <h1 className='font-bold text-lg'>Recent Orders</h1>
            <ul>
                {data.map((order, id) => (
                    <li key={id}
                        className='bg-gray-50 hover:bg-gray-100 rounded-lg p-2 my-3 flex items-center cursor-pointer'>
                        <div className='rounded-lg p-3 bg-purple-100'>
                            <FaShoppingBag className='text-purple-800' />
                        </div>
                        <div className='flex'>
                            <p className='ml-2 font-bold'>${order.total}</p>
                            <p className='ml-2'>{order.name.first}</p>
                        </div>
                        <div className='text-xs right-6 absolute md:hidden lg:flex'>{order.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecentOrders