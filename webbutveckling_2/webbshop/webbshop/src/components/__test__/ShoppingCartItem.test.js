import {fireEvent, render} from '@testing-library/react';
import ShoppingCartItem from "../shoppingCart/ShoppingCartItem";

let getByTestId

beforeEach(() => {
    const component = render(<ShoppingCartItem/>)
    getByTestId = component.getByTestId
})

test('change input', () => {
    const inputElement = getByTestId('input')
    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })
    expect(inputElement.value).toBe('5')
})