import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {
  
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            )
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Changed layout to horizontal scroll */}
            <div className='w-full flex gap-4 overflow-x-auto px-3 sm:px-6 py-5 scrollbar-hide'>
                {relDoc.map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`)
                            window.scrollTo(0, 0)
                        }}
                        key={index}
                        className='flex-shrink-0 w-60 border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white'
                    >
                        <img className='bg-blue-100 w-full h-40 object-cover' src={item.image} alt='' />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium mt-1'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedDoctors
