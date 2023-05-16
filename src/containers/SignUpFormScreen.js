import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import tick from "../assets/icons/tick.svg";

const SignUpFormScreen = () => {
    const navigate = useNavigate();
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [pswrdverify,setpswrdverify] = useState([false,false,false,false]);
    const [message,setmessage] = useState(["","","",""]);

    useEffect(() => {
        document.getElementById("signup-name").classList.remove("border-red-600");
        let msg=[...message];
        if(!name) msg[0]="*Please enter your name.";
        else msg[0]="";
        setmessage(msg);
    }, [name]);

    useEffect(() => {
        document.getElementById("signup-username").classList.remove("border-red-600");
        let msg=[...message];
        if(!username) msg[2]="*Please enter your username.";
        else msg[2]="";
        setmessage(msg);
    }, [username]);

    useEffect(() => {
        document.getElementById("signup-email").classList.remove("border-red-600");
        let msg=[...message];
        const emailverify = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailverify.test(email)) msg[1]="*Please enter a valid Email ID."
        else msg[1]="";
        setmessage(msg);
    }, [email]);

    useEffect(() => {
        document.getElementById("signup-password").classList.remove("border-red-600");
        setpswrdverify([
            (/[A-Z]/.test(password)),
            (/[a-z]/.test(password)),
            (/\d/.test(password)),
            (password.length>=8)
        ]);
        let msg=[...message];
        if(pswrdverify.includes(false)) msg[3]="*Please enter a valid password.";
        else msg[3]="";
        setmessage(msg);
    },[password]);


    const Submit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        let arr=["name","email","username","password"]
        let verified=true;
        for(let i=0;i<4;i++)
            if(message[i]){
                document.getElementById("signup-"+arr[i]).classList.add("border-red-600");
                verified=false;
            }
        if(verified) navigate("/signup/verify")
    }; 

    return (
        <div className=' w-full bg-[#FFF9F0] flex items-center justify-center py-20'>
            <div className='border-2 border-black w-[80%] max-w-[450px] min-h-[73%] rounded-md py-12 px-7 bg-white mt-10'>
                <h1 className='text-3xl font-semibold text-black'>Sign Up</h1>
                <div className='mt-8'>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Name</p>
                        <input
                            id="signup-name"
                            type="text"
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Email</p>
                        <input
                            id="signup-email"
                            type="email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Username</p>
                        <input
                            id="signup-username"
                            type="text"
                            value={username}
                            onChange={(e)=>setusername(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
                        />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base font-semibold text-black'>Password</p>
                        <input
                            id="signup-password"
                            type="password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            placeholder="sarthak@gmail.com"
                            className=" w-full mt-2.5 py-2 px-2 rounded 3tablet:text-xl 4tablet:text-[23px] focus:outline-none outline-none border-[1px] border-black"
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
                        <div className='mt-3 py-3 px-3 bg-[#FFE9E9]'>
                            {message.map(function(m, i){return<p className='text-sm'>{m}</p>})}
                        </div>
                            
                                
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
