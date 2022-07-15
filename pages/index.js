import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../Components/Feed'
// import Image from 'next/image'
import Header from '../Components/Header'
import Login from '../Components/Login'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'
// import styles from '../styles/Home.module.css'


export default function Home({session}) {
  if(!session){
     <Login/>
    }
  return (
    <div className='h-screen overflow-hidden'>
      <Head>
        <title>Facebook clone</title>
      </Head>
      {/* Header */}
      <Header/>
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widgets/>
      </main>
      
    </div>
  )
}

export async function getServerSideProps(context){
  //context is the request
  //Get the user
  const session = await getSession(context);

  return{
    props:{
      session:session,
    }
  }
}
