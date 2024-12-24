import { auth, googleAuthProvider } from "../config/fireBase"

import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react"



console.log(auth?.currentUser?.email)
export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err);
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err);
    }
  }

  const handleSignWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="text-slate-950 mt-[20px] w-full hover:shadow-[0_0_10px_grey] delay-100 duration-1000 transition-all rounded-lg group shadow-[0_0_10px_white] p-5 border ">

      <div className="grid items-center justify-center">
        <h1 className="text-slate-100 text-3xl m-1">Auth</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email" name="" id="" placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password" name="" id="" placeholder="password" />

      </div>

      <div className="p-3 flex grid-cols-1 items-center justify-center">

        <button
          className="bg-blue-800 text-slate-100"
          onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignWithGoogle}>Sign In with google</button>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
    </div>
  )
}
