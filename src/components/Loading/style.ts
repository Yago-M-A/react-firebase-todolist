import styled from 'styled-components'

export const Loading = styled.div`
  animation: is-rotating 1s infinite;
  width: 20rem;
  height: 20rem;
  border: 1rem solid gray;
  border-top: 1rem solid #f231a5;
  border-radius: 50%;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
