import UpdateTodo from "../updateTodo/UpdateTodo";
import {render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render (<UpdateTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in button', () => {
    expect(getByTestId('headerText').textContent).toBe('Uppdatera Todo')
})