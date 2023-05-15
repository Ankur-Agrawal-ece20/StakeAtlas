import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SignInPasswordScreen = () => {
    const navigate = useNavigate()
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-20'>
            <div className='border-2 border-black w-[33.5%] min-h-[73%] rounded-md py-12 px-7 bg-white mt-10'>
                <h1 className='text-3xl font-semibold text-black'>Sign In</h1>
                <p className='text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>Sign in with Phone Number/Username</p>
                <div className='mt-8'>
                    <div>
                        <p className='text-base font-semibold text-black'>Email ID/Phone Number/Username</p>
                        <input
                            type="text"
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-base font-semibold text-black'>Password</p>
                            <p className='text-[13px] font-medium text-blue-100 underline underline-offset-4'>Sign in with OTP instead</p>
                        </div>
                        <input
                            type="password"
                            placeholder="Sarthak124@"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                        <Link
                            to='/signin/forgotPassword'
                            className='text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>Forgot your password?</Link>
                        {
                            true && (
                                <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                    <p className='text-sm'>You entered an incorrect email and password combination.</p>
                                </div>
                            )
                        }
                    </div>
                    <button
                        onClick={() => navigate('/signin/success')}
                        className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Sign In
                    </button>
                </div>
                <div className='mt-9'>
                    <h1 className='text-center'>New To Stake Atlas?</h1>
                    <button className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium mt-6">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignInPasswordScreen
