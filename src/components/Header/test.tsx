import { render, screen, waitFor } from '@testing-library/react'
import * as F from '../../utils/dbActions'
import userEvent from '@testing-library/user-event'
import Header from '.'

const mockAddTask = jest.spyOn(F, 'addTask')

describe('<Header/>', () => {
  it('should render component Header', async () => {
    render(<Header text="React ToDoList" placeholder="Insert Task..." />)
    const text = screen.getByRole('heading', { name: /react todolist/i })
    const input = screen.getByPlaceholderText(/insert task.../i)
    const value = 'Comprar arroz'

    expect(text).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    //insert text into input
    userEvent.type(input, value)
    expect(input).toHaveValue(value)

    //press enter into input and call the function
    userEvent.type(input, '{enter}')
    await waitFor(() => {
      expect(mockAddTask).toHaveBeenCalled()
    })
  })
})
