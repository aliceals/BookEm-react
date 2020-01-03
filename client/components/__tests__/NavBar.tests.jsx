import React from 'react'

// import react-testing methods
import { render, fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import Navbar from '../NavBarNoRouter'

it('loads and displays greeting', async () => {
    // Arrange

    const url = '/'
    const { getByText, getByRole, container, asFragment } = render(
        <Navbar url={url} />
    )
    // Act
    fireEvent.click(getByText('Book'))

    // Assert
    //Assert that url is /book

})
