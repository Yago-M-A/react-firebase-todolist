import { collection, getDocs, query, where } from 'firebase/firestore'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import { db } from '../../db/firebase'
import { updateTask } from '../../utils/dbActions'
import * as S from './style'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [idDoc, setIdDoc] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async (id: string) => {
      const collectionRef = collection(db, 'Tasks')
      const q = query(collectionRef, where('id', '==', id))
      const docSnap = await getDocs(q)
      docSnap.forEach((doc) => {
        const { value } = doc.data()
        setText(value)
        setIdDoc(doc.id)
      })
      setLoading(false)
    }
    fetchData(id!)
  }, [id])

  const handleUpdate = async () => {
    await updateTask(idDoc, text)
    navigate('/')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <S.Wrapper>
          <h1>Edit</h1>
          <S.Input value={text} onChange={handleChange} />
          <S.Buttons>
            <S.Button color="#3CD3C1" onClick={() => handleUpdate()}>
              Salvar
            </S.Button>
            <S.Button color="#F231A5" onClick={() => navigate('/')}>
              Cancelar
            </S.Button>
          </S.Buttons>
        </S.Wrapper>
      )}
    </S.Container>
  )
}
export default Edit
