import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* ✅ HORIZONTAL SCROLL CONTAINER WITH VISIBLE SCROLLBAR */}
            <div
                className='w-full flex gap-4 pt-5 px-3 sm:px-0 overflow-x-auto rounded-lg'
                style={{
                    scrollbarWidth: 'thin', // For Firefox
                    scrollbarColor: '#3b82f6 #e5e7eb', // thumb + track
                }}
            >
                {/* 👇 Custom Scrollbar Styling */}
                <style>
                    {`
                        /* Chrome, Edge, Safari */
                        div::-webkit-scrollbar {
                            height: 8px;
                        }
                        div::-webkit-scrollbar-track {
                            background: #e5e7eb; /* light gray track */
                            border-radius: 8px;
                        }
                        div::-webkit-scrollbar-thumb {
                            background-color: #3b82f6; /* blue thumb */
                            border-radius: 8px;
                        }
                        div::-webkit-scrollbar-thumb:hover {
                            background-color: #2563eb; /* darker blue hover */
                        }
                    `}
                </style>

                {/* 👇 Doctor Cards */}
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`)
                            window.scrollTo(0, 0)
                        }}
                        key={index}
                        className='min-w-[220px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                                   transition-all duration-500 hover:-translate-y-2 
                                   hover:bg-blue-500 hover:text-white'
                    >
                        <img
                            className='bg-blue-50 w-full h-48 object-cover transition-all duration-500 hover:opacity-80'
                            src={item.image}
                            alt={item.name}
                        />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-lg font-medium'>{item.name}</p>
                            <p className='text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* MORE BUTTON */}
            <button
                onClick={() => {
                    navigate('/doctors')
                    scrollTo(0, 0)
                }}
                className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 
                           transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 
                           hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]'
            >
                More
            </button>
        </div>
    )
}

export default TopDoctors
