import React from 'react'
import { useNavigate } from 'react-router'
import { Link,useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import validator from 'validator';

const SignInPasswordScreen = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const id = location.state.id;
    const [type,settype] = useState(id!=1);
    const [userid,setuserid] = useState(location.state.value);
    const [message,setmessage] = useState("");
    const [otp,sentotp] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const inputvalue = ["Email","Phone Number","Username"]

    useEffect(() => {
      if(type) return;
      if(timeLeft===0){
         document.getElementById("resendbtn").classList.add("text-blue-100");
         document.getElementById("resendbtn").classList.remove("text-gray-400"); 
         document.getElementById("resendbtn").classList.add("underline");
         setTimeLeft(null)
      }
      if (!timeLeft) return;
      document.getElementById("resendbtn").classList.remove("text-blue-100"); 
      document.getElementById("resendbtn").classList.add("text-gray-400"); 
      document.getElementById("resendbtn").classList.remove("underline"); 
      const intervalId = setInterval(() => {    
        setTimeLeft(timeLeft - 1);
      }, 1000); 
      return () => clearInterval(intervalId);
    }, [timeLeft]);

    const sendOTP= () => {
        setmessage("");
        switch(id){
            case 0:
                // code for email otp verification
                if(validator.isEmail(userid)){
                    sentotp(true);
                    setTimeLeft(30);
                }
                else setmessage("You have entered an incorrect email.");
                break;
            case 1:
                if(validator.isMobilePhone(userid)){
                    // code for phone otp verification
                    sentotp(true);
                    setTimeLeft(30);
                }
                else setmessage("You have entered an incorrect email.");
                break;
            case 2:
                // code for username OTP verification
                sentotp(true);
                setTimeLeft(30);
                break;
        }
    }
    const togglePSWRD = () =>{
        settype(!type);
        sentotp(false);
        if(type) sendOTP()
    }
    
    const Submit = (e) => {
        e.preventDefault();
        const pswrd=document.getElementById("password").value;
        console.log(userid);
        console.log(pswrd);
        switch(id){
            case 0:
                //verify email password
                navigate('/signin/success');
                break;
            case 1:
                //verify phone otp
                navigate('/signin/success');
                break;
            case 2:
                //verify userid password
                navigate('/signin/success');
                break;
            case 3:
                //verify email otp
                navigate('/signin/success');
                break;
            default:
                setmessage("You have entered incorrect id and password combination.");
        }
    }; 

    useEffect(()=>{
        if(id===1) sendOTP();
    },[]);
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='cursor-default border md:border-2 border-black w-[90%] max-w-[450px] min-h-[73%] rounded-md py-6 md:py-12 px-4 md:px-7 bg-white'>
            <h1 className='text-3xl font-semibold text-black'>Sign In</h1>
                <p 
                    onClick={()=>navigate('/signin/username')} 
                    className='cursor-pointer text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>
                    	&larr; Sign in with {(id===0)? "Phone Number" : "Email"} / {id===2?"Phone Number":"Username"}
                </p>
                <div className='mt-8'>
                    <div>
                        <p className='text-base font-semibold text-black'>{inputvalue[id]}</p>
                        <input
                            type="text"
                            value={userid}
                            onChange={(e)=>setuserid(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-base font-semibold text-black'>{type?"Password":"OTP"}</p>
                            <p onClick={()=>togglePSWRD()} className='cursor-pointer text-[13px] font-medium text-blue-100 underline underline-offset-4'>Sign in with {type?"OTP":"Password"} instead</p>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder=""
                            className=" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                        { type? 
                            <Link
                                to='/signin/forgotPassword'
                                className='text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>
                                    Forgot your password?
                            </Link>:
                            <button 
                                id="resendbtn"
                                disabled={timeLeft}
                                onClick={()=>{sendOTP()}}
                                className="text-[13px] font-medium underline-offset-4 mt-1 mb-2">
                                    Resend OTP {timeLeft && "( "+timeLeft+" Secs )"}
                            </button>
                        }
                        {
                            message!=="" && (
                                <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                    <p className='text-sm'>{message}</p>
                                </div>
                            )
                        }
                        {
                            otp && (
                                <div className='mt-3 py-3 px-3 bg-[#ecffe9]'>
                                    <p className='text-sm'>OTP Sent on your {id==1?"Phone Number":"Email"}</p>
                                </div>
                            )
                        }
                    </div>
                    <button
                        onClick={(e) => Submit(e)}
                        className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Sign In
                    </button>
                </div>
                <div className='mt-9'>
                    <h1 className='text-center'>New To Stake Atlas?</h1>
                    <button onClick={()=>navigate('/signup')} className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium mt-2">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignInPasswordScreen
