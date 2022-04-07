import GetTodoById from "../getTodoById/GetTodoById";
import {fireEvent, render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render (<GetTodoById/>)
    getByTestId = component.getByTestId
})

test('Check text in button', () => {
    const button = getByTestId('buttonText')
    fireEvent.click(button)
    const text = getByTestId('text')
    expect(text.textContent).toBe('Hämta en Todo via ett Id')
    expect(text).toBeInTheDocument()
    fireEvent.click(button)
    expect(text).not.toBeInTheDocument()
})