
import admin from "firebase-admin"
import serviceAccount from "./../../sapper-blog-6b5c2-firebase-adminsdk-cuvii-797000db83.json"
import posts from './blog/_posts'


export async function get(req,res,next){

  let db = admin.database()
  let dbRef =db.ref();
  await Promise.all(posts.map(post => {
    dbRef.child(post.slug).set(post)
  }))
  res.end("done")
}
