import React from 'react'
import { collection, orderBy } from "firebase/firestore";
import { db } from "../firebase"
import Post from './Post';
import { useCollection } from 'react-firebase-hooks/firestore'

const Posts = () => {
  const userRef = collection(db,"posts");
  
  const [realTimePosts] = useCollection(userRef,orderBy('timestamp','desc'));
  return (
    <div>
        {realTimePosts?.docs.map((post)=>{
          return(
            <div>
              <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
              />
            </div>
          )
        })}
    </div>
  )
}

export default Posts