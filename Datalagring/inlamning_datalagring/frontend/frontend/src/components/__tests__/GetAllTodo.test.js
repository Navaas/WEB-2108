import GetAllTodo from "../getAllTodo/GetAllTodo";
import {render} from '@testing-library/react';


let getByTestId

beforeEach(() => {
    const component = render(<GetAllTodo/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('buttonText').textContent).toBe('Hämta hela listan')
})