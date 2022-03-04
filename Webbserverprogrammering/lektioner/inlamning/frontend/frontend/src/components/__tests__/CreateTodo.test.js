import Alive from "../Alive";
import { render } from "@testing-library/react"
import CreateTodo from "../CreateTodo";

let getByTestId

beforeEach(() => {
    const component = render (<CreateTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('headerText').textContent).toBe('Skapa todo')
})