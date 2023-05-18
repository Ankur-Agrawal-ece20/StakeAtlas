import React from 'react'
import { useNavigate } from 'react-router'

const ChangePasswordScreen = () => {
    const navigate = useNavigate()
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='cursor-default border md:border-2 border-black w-[90%] max-w-[450px] min-h-[73%] rounded-md py-6 md:py-12  px-4 md:px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black'>Change Password</h1>
                <div className='mt-8'>
                    <div>
                        <p className='text-base font-medium text-black'>New Password</p>
                        <input
                            type="password"
                            className=" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-4'>
                        <p className='text-base font-medium text-black'>Confirm Password</p>
                        <input
                            type="password"
                            className=" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <button
                        onClick={() => navigate('/signin/forgotPassword/change/success')}
                        className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordScreen
