import React, { useState } from 'react'
import { addTask } from '../../utils/dbActions'
import * as S from './style'

type HeaderProps = {
  text: string
  placeholder: string
}

const Header = ({ text, placeholder }: HeaderProps) => {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.currentTarget.value
    setValue(n)
  }

  const keyCode = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (e.key === 'Enter') {
      await addTask(value)
      setValue('')
    }
  }
  return (
    <S.Wrapper>
      <h1>{text}</h1>
      <S.Input
        placeholder={placeholder}
        onKeyUp={keyCode}
        value={value}
        onChange={handleChange}
      />
    </S.Wrapper>
  )
}

export default Header
