import * as S from './style'
import { TrashAlt } from '@styled-icons/fa-solid/TrashAlt'
import { Edit } from '@styled-icons/boxicons-regular/Edit'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../../utils/dbActions'

type ItemProps = {
  text: string
  id: string
}

const Item = ({ text, id }: ItemProps) => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Text>
        <h2>{text}</h2>
      </S.Text>
      <S.Icons>
        <TrashAlt
          onClick={async () => await deleteTask(id)}
          aria-label="Logo Lixeira"
        />
        <Edit onClick={() => navigate(`/edit/${id}`)} aria-label="Logo Edit" />
      </S.Icons>
    </S.Wrapper>
  )
}

export default Item
