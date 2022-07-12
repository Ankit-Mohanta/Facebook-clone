import { getSession } from 'next-auth/react'
import Head from 'next/head'
// import Image from 'next/image'
import Header from '../Components/Header'
import Login from '../Components/Login'
// import styles from '../styles/Home.module.css'


export default function Home({session}) {
  if(!session){
     <Login/>
    }
  return (
    <div>
      <Head>
        <title>Facebook clone</title>
      </Head>
      {/* Header */}
      <Header/>
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
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
