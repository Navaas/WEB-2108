import {fireEvent, render} from "@testing-library/react"
import DeleteTodo from "../DeleteTodo";

let getByTestId

beforeEach(() => {
    const component = render (<DeleteTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('headerText').textContent).toBe('Ta bort en Todo')
})

test ('Check if name not exist i database and response from databas is correct', () => {
    const deleteButton = getByTestId ('deleteButton')
    const responseFromDatabase = getByTestId ('responseFromDatabase')

    fireEvent.click(deleteButton)
    setTimeout: () => {expect(getByTestId(responseFromDatabase).textContent).toBe('User with name: "Moa" don\'t exist in database!'), 500}
})