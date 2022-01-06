import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import List from '.'

const itens = [
  { id: '123', value: 'Comprar feijão' },
  { id: '456', value: 'Comprar queijo' }
]

describe('<List/>', () => {
  it('should render component List', () => {
    render(
      <Router>
        <List itens={itens} />
      </Router>
    )
  })
})
