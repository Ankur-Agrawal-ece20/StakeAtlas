import React from 'react'
import { useNavigate } from 'react-router'

const SignInUsernameScreen = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[72.5vh] w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='border-2 border-black w-[33.5%] min-h-[73%] rounded-md py-12 px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black'>Sign In</h1>
                <div className='mt-8'>
                    <p className='text-base font-medium text-black'>Email ID/Phone Number/Username</p>
                    <input
                        type="text"
                        placeholder="iPhone 12 mini, skoda fabia,"
                        className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                    />
                    {
                        true && (
                            <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                <p className='text-sm'>You entered an incorrect email/username/number</p>
                            </div>
                        )
                    }
                    <button
                    onClick={()=> navigate('/signin/password')}
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

export default SignInUsernameScreen 
