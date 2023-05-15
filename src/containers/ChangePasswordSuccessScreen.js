import React from 'react'
import { useNavigate } from 'react-router'

const ChangePasswordSuccessScreen = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[72.5vh] w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='border-2 border-black w-[33.5%] min-h-[73%] rounded-md py-12 px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black leading-10'>You’ve successfully changed <br />your password
                </h1>
                <button
                    onClick={() => navigate('/')}
                    className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                    Go Back To Home
                </button>
            </div>
        </div>
    )
}

export default ChangePasswordSuccessScreen
