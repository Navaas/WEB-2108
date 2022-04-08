import DeleteTodo from "../deleteTodo/DeleteTodo"
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<DeleteTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    const button = getByTestId('buttonText')
    fireEvent.click(button)
    const text = getByTestId('text')
    expect(text.textContent).toBe('Ta bort en Todo via Id')
    expect(text).toBeInTheDocument()
    fireEvent.click(button)
    expect(text).not.toBeInTheDocument()
})