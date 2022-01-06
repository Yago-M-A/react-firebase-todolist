import Header from '../../components/Header'
import List from '../../components/List'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../db/firebase'

export type ItensProps = {
  id: string
  value: string
}

const Home = () => {
  const [itens, setItens] = useState<ItensProps[]>([])
  useEffect(() => {
    let mounted = true
    const collectionRef = collection(db, 'Tasks')
    const q = query(collectionRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      const n: ItensProps[] = []
      snapshot.docs.map((doc) => {
        const { id, value } = doc.data()
        n.push({ id, value })
      })
      if (mounted) {
        setItens(n)
      }
    })
    return () => {
      mounted = false
    }
  }, [])
  return (
    <>
      <Header text="React ToDoList" placeholder="Insert Task..." />
      <List itens={itens} />
    </>
  )
}

export default Home
