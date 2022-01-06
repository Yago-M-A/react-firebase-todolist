import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid pink;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.8rem;
`

export const Text = styled.div`
  h2 {
    font-size: 2rem;
  }
`

export const Icons = styled.div`
  svg {
    width: 2rem;
    cursor: pointer;
  }

  svg + svg {
    margin-left: 0.4rem;
  }
`
