import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { child, push, update } from "firebase/database";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);
  const [imageToShow, setImageToShow] = useState(null);

  const addImageToPost = (e) => {
    e.preventDefault();
    setImageToPost(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToShow(readerEvent.target.result);
    };
  };

  const uploadFile = () => {
    // const name = new Date().getTime() + imageToPost.name;
    const imageRef = ref(storage, imageToPost.name);
    const uploadTask = uploadBytesResumable(imageRef, imageToPost);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
            default:
              break;
        }
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const removeImage = () => {
    setImageToPost(null);
    setImageToShow(null);
  };

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) {
      return;
    } else {
      const data = {
        name: session.user.name,
        message: inputRef.current.value,
        email: session.user.email,
        image: session.user.image,
        timestamp: Date.now(),
      };
      // await setDoc(doc(db, "posts", session.user.name), data).then(
        const newPostRef = doc(collection(db, "posts"));
        await setDoc(newPostRef, data).then(
      // await setDoc(doc(db, "posts", session.user.name), data).then(
        () => {
          if(imageToPost){
            uploadFile();  
            removeImage();
          }
        }
      );
      inputRef.current.value = "";
    }
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-100 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none focus:text-gray-500"
            placeholder={`what's in your min ${session.user.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
        {imageToShow && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToShow} alt="" className="h-10 object-contain" />
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-l">
        <div className="inputicon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-500">
            Live video
          </p>
        </div>
        <div
          className="inputicon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-500">
            Photo/Video
          </p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputicon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-500">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
