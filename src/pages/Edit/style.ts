import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 130rem;
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid pink;
  border-radius: 2rem;
  padding: 2rem 0.8rem;

  h1 {
    font-size: 3rem;
  }
`

export const Input = styled.input`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 300;
  padding: 0.2rem 0.5rem;
  color: white;
  background: transparent;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  button + button {
    margin-left: 0.5rem;
  }
`

export const Button = styled.button`
  ${({ color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 10rem;
    height: 4rem;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    background-color: ${color};
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
