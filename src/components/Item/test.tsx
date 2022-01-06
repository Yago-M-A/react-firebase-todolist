import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import * as F from '../../utils/dbActions'
import Item from '.'

const text = 'Comprar feijão'
const id = '123'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

const deleteTaskSpy = jest.spyOn(F, 'deleteTask')

describe('<Item/>', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should render the component Item', () => {
    render(
      <Router>
        <Item text={text} id={id} />
      </Router>
    )
    const h2 = screen.getByRole('heading', { name: /comprar feijão/i })
    const trash = screen.getByLabelText(/logo lixeira/i)
    const edit = screen.getByLabelText(/logo edit/i)
    expect(h2).toBeInTheDocument()
    expect(trash).toBeInTheDocument()
    expect(edit).toBeInTheDocument()
  })

  it('should call the function navigate()', async () => {
    render(
      <Router>
        <Item text={text} id={id} />
      </Router>
    )
    const edit = screen.getByLabelText(/logo edit/i)
    expect(edit).toBeInTheDocument()

    userEvent.click(edit)
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled()
    })
  })

  it('should call the function navigate()', async () => {
    render(
      <Router>
        <Item text={text} id={id} />
      </Router>
    )
    const trash = screen.getByLabelText(/logo lixeira/i)
    expect(trash).toBeInTheDocument()

    userEvent.click(trash)
    await waitFor(() => {
      expect(deleteTaskSpy).toHaveBeenCalled()
    })
  })
})
