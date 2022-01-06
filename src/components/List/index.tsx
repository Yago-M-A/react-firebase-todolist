import React from 'react'
import { ItensProps } from '../../App'
import Item from '../Item'
import * as S from './style'

type ListProps = {
  itens: ItensProps[]
}
const List = ({ itens }: ListProps) => (
  <S.Wrapper data-testid="List">
    {itens.map((item) => {
      return <Item key={item.id} text={item.value} id={item.id} />
    })}
  </S.Wrapper>
)

export default List
