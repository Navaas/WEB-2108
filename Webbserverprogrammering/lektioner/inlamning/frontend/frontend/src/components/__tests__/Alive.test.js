import Alive from "../Alive";
import { render } from "@testing-library/react"

let getByTestId

beforeEach(() => {
    const component = render (<Alive/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('headerText').textContent).toBe('Alive')
})