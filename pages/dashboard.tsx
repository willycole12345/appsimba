import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar';



export default  function dashboard( ) {
    const {query} = useRouter();
    console.log(query.number);
    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
          const body = { id : query.number};
          const response =  await fetch('/api/login', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          const data = await response.json() ;
          //console.log(data);
          console.log(data.result.emai);
          // var detail= ' <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">'+
          // data.message +'</span>';
         // router.push('/dashboard');
        } catch (error) {
          console.error(error);
        }
      };  
        return (
            
            <div>
                <Navbar />
                <div>
                
                </div>
        </div>
        );
    
}   