import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline }  from 'react-icons/md';
import Router from 'next/router';
import styles from '../styles/Home.module.css'





function Signup (){
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { email : email, password:password,name : name };
     const response = await fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json() ;
      console.log(data.message);
    // var detail= ' <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">'+
    //           data.message +'</span>';

    } catch (error) {
      console.error(error);
    }
  };  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
              <span className="text-left font-bold">Company</span> Name
            </div> 
            
            <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">Sign In to Account</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="text-gray-400 my-3">or use your Email Account</p>
                        <form  onSubmit={submitData}> 
                        <div className="flex flex-col items-center">
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope  className="text-gray-400 m-2"/>
                    <input autoFocus onChange={(e) => setName(e.target.value)}  placeholder="Name"type="text" value={name}
                    className="bg-gray-100 outline-none text-sm" />
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope  className="text-gray-400 m-2"/>
                          <input autoFocus onChange={(e) => setEmail(e.target.value)}  placeholder="Email"type="email" value={email}  className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <MdLockOutline className="text-gray-400 m-2"/>
                          <input autoFocus onChange={(e) => setPassword(e.target.value)}  placeholder="Password" type="Password" value={password} className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                     </div>
                        <button type="submit" className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibo 
                         ld hover:bg-white hover:text-green-500'>
                           sign up
                        </button>
                        </form>
            </div>
          
</div> 
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl"> 
        <h2 className="test-3xl font-bold mb-2">Hi There </h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className='mb-2'> Already have an Account </p>
        <Link href="/signin">
        <a  className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibo 
         ld hover:bg-white hover:text-green-500'> Sign in</a>
         </Link>
        </div>
      </div>
    </main>
    </div>
  )
  }
  export default Signup;
