import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
  getDocs,
  where,
  query,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../db/firebase'
import { v4 as uuidv4 } from 'uuid'

export const addTask = async (value: string) => {
  try {
    const collectionRef = collection(db, 'Tasks')
    const id = uuidv4()
    const createdAt = Timestamp.now()
    const payload = { id, value, createdAt }
    await addDoc(collectionRef, payload)
  } catch (error) {
    console.log(error)
  }
}

export const updateTask = async (idDoc: string, text: string) => {
  try {
    const docRef = doc(db, 'Tasks', idDoc)
    await updateDoc(docRef, { value: text })
  } catch (error) {
    console.log(error)
  }
}

export const deleteTask = async (id: string) => {
  try {
    const collectionRef = collection(db, 'Tasks')
    const q = query(collectionRef, where('id', '==', id))
    const snapshot = await getDocs(q)
    const results = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    results.forEach(async (result) => {
      const docRef = doc(db, 'Tasks', result.id)
      await deleteDoc(docRef)
    })
  } catch (error) {
    console.log(error)
  }
}
