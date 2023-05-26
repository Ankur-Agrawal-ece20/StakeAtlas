import React from 'react'
import axiosInstance from '../axiosInstance';
import { useState } from 'react';

const SignInSuccessScreen = () => {
    const [message,setmessage]=useState("Please Wait!!");
    axiosInstance.get("/auth/getMe")
    .then(data => {
        setmessage(`${data.data.data.first_name} you’ve logged in!`);
    })
    .catch(err => {
        setmessage(err.response.data.error);
    })
    return (
        <div className='min-h-[72.5vh] w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='border md:border-2 border-black w-[80%] max-w-[450px] min-h-[73%] rounded-md py-12 px-4 md:px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black leading-10'>
                    {message.includes("logged") && "Welcome"}
                    <br />
                    {message}
                </h1>
            </div>
        </div>
    )
}

export default SignInSuccessScreen