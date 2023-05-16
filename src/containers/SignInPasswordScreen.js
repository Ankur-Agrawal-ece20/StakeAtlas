import React from 'react'
import { useNavigate } from 'react-router'
import { Link,useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SignInPasswordScreen = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [id,setid] = useState(location.state.id);
    const [userid,setuserid] = useState(location.state.value);
    const [message,setmessage] = useState("");
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
      if(timeLeft===0){
         document.getElementById("resendbtn").classList.add("text-blue-100");
         document.getElementById("resendbtn").classList.add("underline");
         setTimeLeft(null)
      }
      if (!timeLeft) return;
      document.getElementById("resendbtn").classList.remove("text-blue-100"); 
      document.getElementById("resendbtn").classList.remove("underline"); 
      const intervalId = setInterval(() => {    
        setTimeLeft(timeLeft - 1);
      }, 1000); 
      return () => clearInterval(intervalId);
    }, [timeLeft]);

    const phoneOTP = () => {
        const phoneverify = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if(phoneverify.test(userid)){
            // code for otp verification
            setTimeLeft(30);
        }
        else setmessage("You have entered an incorrect phone number.");
    }
    const emailOTP = () => {
        const emailverify = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailverify.test(userid)){
            // code for otp verification
            setid(3);
            setTimeLeft(30);
        }
        else setmessage("You have entered an incorrect email.");
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

    useEffect(()=>{if(id===1) phoneOTP()},[id]);
    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-20'>
            <div className='border-2 border-black w-[80%] max-w-[450px] min-h-[73%] rounded-md py-12 px-7 bg-white mt-10'>
                <h1 className='text-3xl font-semibold text-black'>Sign In</h1>
                <p 
                    onClick={()=>navigate('/signin/username')} 
                    className='cursor-pointer text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>
                    Sign in with {(id===0 || id===3)? "Phone Number" : "Email"} / {id===2?"Phone Number":"Username"}
                </p>
                <div className='mt-8'>
                    <div>
                        <p className='text-base font-semibold text-black'>{id===1?"Phone Number":(id===2?"Username":"Email")}</p>
                        <input
                            type="text"
                            value={userid}
                            onChange={(e)=>setuserid(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-base font-semibold text-black'>{id%2===0?"Password":"Verify OTP"}</p>
                            {(id===0) && <p onClick={()=>emailOTP()} className='cursor-pointer text-[13px] font-medium text-blue-100 underline underline-offset-4'>Sign in with OTP instead</p>}
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder=""
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                        { id%2===0? 
                            <Link
                                to='/signin/forgotPassword'
                                className='text-[13px] font-medium text-blue-100 underline underline-offset-4 mt-1 mb-2'>
                                    Forgot your password?
                            </Link>:
                            <button 
                                id="resendbtn"
                                disabled={timeLeft}
                                onClick={()=>{id===1?phoneOTP():emailOTP()}}
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
                    </div>
                    <button
                        onClick={(e) => Submit(e)}
                        className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Sign In
                    </button>
                </div>
                <div className='mt-9'>
                    <h1 className='text-center'>New To Stake Atlas?</h1>
                    <button onClick={()=>navigate('/signup')} className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium mt-6">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignInPasswordScreen
