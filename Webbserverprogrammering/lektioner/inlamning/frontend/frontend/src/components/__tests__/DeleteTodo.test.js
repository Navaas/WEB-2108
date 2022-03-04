import Alive from "../Alive";
import { render } from "@testing-library/react"
import DeleteTodo from "../DeleteTodo";

let getByTestId

beforeEach(() => {
    const component = render (<DeleteTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('headerText').textContent).toBe('Ta bort en Todo')
})