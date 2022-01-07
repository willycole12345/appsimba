import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';


 function Dashboard( ) {
    const {query} = useRouter();
    console.log(query.number);
    

        return (
            
            <div>
                <Navbar />
                <div>
                
                </div>
        </div>
        );
    
}   

export default Dashboard;