import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import validator from 'validator';

const SignInUsernameScreen = () => {
    const navigate = useNavigate();
    const [error,showerror] = useState(false);
    const verify = () => {
        const value = document.getElementById("id_input").value;
        if(validator.isEmail(value)) navigate('/signin/password',{state:{id:0,value:value}});
        else if(validator.isMobilePhone(value)) navigate('/signin/password',{state:{id:1,value:value}});
        else if(value!=="") navigate('/signin/password',{state:{id:2,value:value}});
        else showerror(true);
    }
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='cursor-default border-2 border-black w-[90%] max-w-[450px] min-h-[73%] rounded-md py-6 md:py-12 px-4 md:px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black'>Sign In</h1>
                <div className='mt-8'>
                    <p className='text-base font-medium text-black'>Email ID/Phone Number/Username</p>
                    <input
                        id="id_input"
                        type="text"
                        placeholder="iPhone 12 mini, skoda fabia,"
                        className=" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                    />
                    {
                        error && (
                            <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                <p className='text-sm'>You entered an incorrect email/username/number</p>
                            </div>
                        )
                    }
                    <button
                    onClick={()=>verify()}
                    className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Sign In
                    </button>
                </div>
                <div className='mt-9'>
                    <h1 className='text-center'>New To Stake Atlas?</h1>
                    <button  onClick={()=>navigate('/signup')} className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium mt-6">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignInUsernameScreen 
