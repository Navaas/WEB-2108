import { fireEvent, render } from '@testing-library/react';
import Header from '../header/Header'
import Footer from "../footer/Footer";


test('check if the footer contains the right className', () => {
    const components = render(<Footer/>)
    const footerElement = components.getByTestId('footertext')
    expect(footerElement.textContent).toBe('Copyright © 2022 by Michaela Andreasson')
})