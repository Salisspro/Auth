
import { useEffect } from "react"
import { db } from "../config/fireBase"
import { getDocs, collection } from "firebase/firestore"
function FireStore() {

   useEffect(() => {
      const movieCollections = collection(db, 'movie')
      const getMovie = async () => {
         try {
            const data = await getDocs(movieCollections)
            console.log(data)
         } catch (err) {
            console.error('err ', err);
         }
      }
      getMovie()
   }, [])
   return (
      <div className="mt-5">
         <h1 className="text-3xl">FireStore...</h1>
      </div>
   )
}

export default FireStore