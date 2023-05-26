import React from 'react'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import validator from 'validator';
import { useLocation } from 'react-router-dom'
import axiosInstance from '../axiosInstance';

const SignUpPhoneVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userid, setuserid] = useState();
    const [message, setmessage] = useState("");
    const [otp, sentotp] = useState(0);
    const [otpcount, setotpcount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (timeLeft === 0) {
            document.getElementById("signupresendbtn").classList.add("text-blue-100");
            document.getElementById("signupresendbtn").classList.remove("text-gray-400");
            document.getElementById("signupresendbtn").classList.add("underline");
            setTimeLeft(null)
        }
        if (!timeLeft) return;
        document.getElementById("signupresendbtn").classList.remove("text-blue-100");
        document.getElementById("signupresendbtn").classList.add("text-gray-400");
        document.getElementById("signupresendbtn").classList.remove("underline");
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const phoneOTP = () => {
        sentotp(false);
        if(otpcount>=5) setmessage("You have requested for OTP 5 times. Please try again later!");
        else if (validator.isMobilePhone(userid)) {
            // code for otp verification
            axiosInstance.post(`/auth/sendPhoneOtp/${userid}`, { phone: userid })
                .then(data => {
                    setotpcount(otpcount+1);
                    setmessage("");
                    document.getElementById("signupresendbtn").classList.remove("hidden");
                    sentotp(true);
                    setTimeLeft(30);
                })
                .catch(err => {
                    console.log(err);
                    setmessage(err.response.data.error);
                })
        }
        else setmessage("You have entered an incorrect phone number.");
    }

    const Submit = (e) => {
        e.preventDefault();
        const pswrd = document.getElementById("signuppassword").value;
        console.log(userid);
        console.log(pswrd);
        let data = location.state.data;
        data["phone"] = userid;
        data["otp"] = pswrd;
        axiosInstance.post("/auth/register", data)
            .then(data => {
                localStorage.setItem("accessToken", data.data.token);
                navigate("/signin/success")
            })
            .catch(err => {
                setmessage(err.response.data.error);
            })
    };
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='cursor-default border md:border-2 border-black w-[90%] max-w-[450px] min-h-[73%] rounded-md py-6 md:py-12  px-4 md:px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black'>Sign Up</h1>
                <div className='mt-8'>
                    <div>
                        <p className='text-base font-semibold text-black'>Phone Number</p>
                        <div class="relative w-full mt-2.5">
                            <input
                                type="text"
                                value={userid}
                                onChange={(e) => setuserid(e.target.value)}
                                className=" w-full py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                            />
                            <button onClick={() => { phoneOTP() }} class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-amber-300 border border-black hover:bg-amber-300">Send OTP</button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-base font-semibold text-black'>Verify OTP</p>
                        </div>
                        <input
                            id="signuppassword"
                            type="password"
                            placeholder=""
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                        <button
                            id="signupresendbtn"
                            disabled={timeLeft}
                            onClick={() => { phoneOTP() }}
                            className="hidden text-[13px] font-medium underline-offset-4 mt-1 mb-2">
                            Resend OTP {timeLeft && "( " + timeLeft + " Secs )"}
                        </button>
                        {
                            message !== "" && (
                                <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                    <p className='text-sm'>{message}</p>
                                </div>
                            )
                        }
                        {
                            otp && (
                                <div className='mt-3 py-3 px-3 bg-[#ecffe9]'>
                                    <p className='text-sm'>OTP Sent</p>
                                </div>
                            )
                        }
                    </div>
                    <button
                        onClick={(e) => Submit(e)}
                        className="w-full text-xm xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPhoneVerification 
