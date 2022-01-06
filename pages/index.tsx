import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
//import Router from 'next/router'
import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline }  from 'react-icons/md';
import styles from '../styles/Home.module.css'

export default function signup() {
 
  
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
                        <form > 
                        <div className="flex flex-col items-center">
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope  className="text-gray-400 m-2"/>
                          <input text="name" name="name" id="name" 
                            
                              placeholder="FullName"  className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope  className="text-gray-400 m-2"/>
                          <input text="email" name="email" id="email" placeholder="Email"  className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <MdLockOutline className="text-gray-400 m-2"/>
                          <input type="password" name="password" id="password" placeholder="password" className="bg-gray-100 outline-none text-sm"/> 
                        </div>
                        <div  className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <MdLockOutline className="text-gray-400 m-2"/>
                          <input type="password" name="repassword" id="repassword" placeholder="repassword" 
                            className="bg-gray-100 outline-none text-sm"/> 
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

