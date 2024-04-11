import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '../data/data'

const orders = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between px-4 pt-4'>
                <h1>Orders</h1>
                <h2>Welcome back</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between font-bold'>
                        <span>Order</span>
                        <span className='sm:text-left text-right'>Status</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden sm:grid'>Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg p-2 my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex'>
                                    <div className='p-3 rounded-lg bg-purple-100'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 font-bold'>${order.total}</p>
                                        <p className='text-sm text-gray-800'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p>

                                    <span className={
                                        order.status == 'Completed' ? 'bg-blue-200 rounded-lg p-2'
                                            : order.status == 'Processing' ? 'bg-green-200 rounded-lg p-2'
                                                : 'bg-yellow-200 rounded-lg p-2'
                                    }>
                                        {order.status}
                                    </span>
                                </p>
                                <p className='hidden md:flex'>{order.date}</p>
                                <div className='flex justify-between'>
                                    <p className='sm:flex hidden'>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default orders