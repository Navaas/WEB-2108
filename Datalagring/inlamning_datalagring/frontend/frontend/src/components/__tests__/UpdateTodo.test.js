import UpdateTodo from "../updateTodo/UpdateTodo";
import {fireEvent, render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render (<UpdateTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in span', () => {
    const button = getByTestId('spanText')
    fireEvent.click(button)
    const text = getByTestId('text')
    expect(text.textContent).toBe('Namn:')
    expect(text).toBeInTheDocument()
    fireEvent.click(button)
    expect(text).not.toBeInTheDocument()
})