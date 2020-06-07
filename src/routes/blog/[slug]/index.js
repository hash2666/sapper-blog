import admin from "firebase-admin"
import  serviceAccount from './../../../../sapper-blog-6b5c2-firebase-adminsdk-cuvii-797000db83.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sapper-blog-6b5c2.firebaseio.com"
});

export async function put(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "123") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.update({ html: content, title: title })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}

export async function post(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "123") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.set({ html: content, title: title, slug: slug })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}