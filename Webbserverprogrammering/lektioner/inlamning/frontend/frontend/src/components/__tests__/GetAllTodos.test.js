import Alive from "../Alive";
import { render } from "@testing-library/react"
import DeleteTodo from "../DeleteTodo";
import GetAllTodos from "../GetAllTodos";

let getByTestId

beforeEach(() => {
    const component = render (<GetAllTodos/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('headerText').textContent).toBe('Hämta hela listan')
})