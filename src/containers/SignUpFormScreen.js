import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import tick from "../assets/icons/tick.svg";
import validator from 'validator';

const SignUpFormScreen = () => {
    const navigate = useNavigate();
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [pswrd,setpswrd] = useState("");
    const [pswrdverify,setpswrdverify] = useState([false,false,false,false]);
    const [message,setmessage] = useState(["","","",""]);
    const [isMount, setIsMount] = useState(true);

    useEffect(() => {
        if(isMount) {setIsMount(false); return;}
        let verifypass=[
            (/[A-Z]/.test(pswrd)),
            (/[a-z]/.test(pswrd)),
            (/\d/.test(pswrd)),
            (pswrd.length>=8)
        ];
        setpswrdverify(verifypass);
        let msg=[...message];
        msg[0]=(name)?"":"*Please enter your name.";
        msg[1]=(validator.isEmail(email))?"":"*Please enter a valid Email ID.";
        msg[2]=(username)?"":"*Please enter your username.";
        msg[3]=(!verifypass.includes(false))?"":"*Please enter a valid password.";
        setmessage(msg);
    }, [name,username,email,pswrd]);

    const Submit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        if(message.filter(item => item === "").length === 4){
            // code for form submission
            navigate("/signup/verify");
        }
    }; 

    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-10'>
            <div className='cursor-default border md:border-2 border-black w-[90%] max-w-[450px] min-h-[73%] rounded-md py-6 md:py-12  px-4 md:px-7 bg-white'>
                <h1 className='text-3xl font-semibold text-black'>Sign Up</h1>
                <div className='mt-8'>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Name</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            className={(message[0]?"border-red-600":"border-black")+" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px]"}
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Email</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            className={(message[1]?"border-red-600":"border-black")+" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px]"}
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Username</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e)=>setusername(e.target.value)}
                            className={(message[2]?"border-red-600":"border-black")+" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px]"}
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Password</p>
                        <input
                            type="password"
                            value={pswrd}
                            onChange={(e)=>setpswrd(e.target.value)}
                            className={(message[3]?"border-red-600":"border-black")+" w-full mt-1 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px]"}
                        />
                        <table class="table-auto mt-2.5 mb-2.5 w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="flex text-[12px]">
                                            <img className={"w-4 h-4 mr-1 "+(!pswrdverify[0]?"grayscale":"")} src={tick}/> 
                                            One uppercase character
                                        </div>
                                    </td>
                                    <td>
                                        <div class="flex text-[12px]">
                                            <img className={"w-4 h-4 mr-1 "+(!pswrdverify[1]?"grayscale":"")} src={tick}/> 
                                            One lowercase character
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex text-[12px]">
                                            <img className={"w-4 h-4 mr-1 "+(!pswrdverify[2]?"grayscale":"")} src={tick}/> 
                                            One number
                                        </div>
                                    </td>
                                    <td>
                                        <div class="flex text-[12px]">
                                            <img className={"w-4 h-4 mr-1 "+(!pswrdverify[3]?"grayscale":"")} src={tick}/> 
                                            8 character minimum
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            message.filter(item => item === "").length !== 4 && (
                                <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                                    {message.map(function(m, i){return<p className='text-sm'>{m}</p>})}
                                </div>
                            )
                        }
                            
                                
                    </div>
                    <button
                        onClick={(e)=>{Submit(e)}}
                        className="w-full text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5">
                        Sign Up
                    </button>
                </div>
                <div className='mt-9'>
                    <span className='text-center'>Already have an account? </span>
                    <Link to='/signin/username' className="text-blue-100 underline font-medium">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SignUpFormScreen
