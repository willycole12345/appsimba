import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline }  from 'react-icons/md';
import Link from 'next/link';
import { Result } from 'postcss';
import Swal from 'sweetalert2'





export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = { email : email, password:password };
    const response =  await fetch('/api/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json() ;
    //console.log(data);
    console.log(data.result.emai);
    Swal.fire({
      title: 'success',
      text: data.message
    })
    
    Router.push({
      pathname: '/dashboard',
      query: { 
              number: data.result.id ,
  
         }
  })
    // var detail= ' <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">'+
    // data.message +'</span>';
   // router.push('/dashboard');
  } catch (error) { 
  Swal.fire({
    title: 'error!',
    text: error.message
  })
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
                        <div className="flex justify-center my-2">
                          <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                            <FaFacebookF className="text-sm"/>
                          </a>
                          <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                            <FaLinkedinIn className="text-sm"/>
                          </a>
                          <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                            <FaGoogle className="text-sm"/>
                          </a>

                        </div>
                        <p className="text-gray-400 my-3">or use your Email Account</p>
                        <form onSubmit={submitData}> 
                        <div className="flex flex-col items-center">
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope  className="text-gray-400 m-2"/>
                          <input autoFocus onChange={(e) => setEmail(e.target.value)} type="email" value={email}
                              placeholder="Email"  className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <MdLockOutline className="text-gray-400 m-2"/>
                          <input type="password"  autoFocus onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"  className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div className="flex justify-between w-64 mb-5">
                          <label className="flex item-center text-xs">
                          <input type="checkbox" name="remember" className="mr-1"/> 
                          Remember me 
                          </label>
                          <a href="#" className="text-xs">Forget Password</a>
                        </div>
                        </div>

                        <button type="submit" className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibo 
                         ld hover:bg-white hover:text-green-500'>
                           sign in
                        </button>
                        </form>
            </div>
          
</div> 
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl"> 
        <h2 className="test-3xl font-bold mb-2">Hi There </h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className='mb-2'> Register on our join us </p>
        <Link href="/">
        <a  className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibo 
         ld hover:bg-white hover:text-green-500'> Sign up</a>
         </Link>
        </div>
      </div>
    </main>
    </div>
  )
 }
 

