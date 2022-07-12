import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import logo from '../img/Facebook_logo_PNG12.png'
// import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    // const { data: session } = useSession()
    // if (session) {
    //     return (
    //       <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //       </>
    //     )
    //   }
    //   return (
    //     <>
    //       Not signed in <br />
    //       <button onClick={() => signIn()}>Sign in</button>
    //     </>
    //   )
  return (
    <div className='grid place-items-center'>
        <Image
        className='rounded-full'
        src={logo}
        width={400}
        height={400}
        objectFit="contain"
        />
        <h1 
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'
        onClick={signIn}>
            Log in with facebook
        </h1>
    </div>
  )
}

export default Login