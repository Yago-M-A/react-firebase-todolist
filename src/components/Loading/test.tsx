import { render, screen } from '@testing-library/react'
import Loading from '.'

describe('<Loading/>', () => {
  it('should rende component Loading', () => {
    render(<Loading />)
    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()
  })
})
