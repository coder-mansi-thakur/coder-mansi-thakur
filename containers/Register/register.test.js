import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import Register from './register'
import { useRouter } from 'next/navigation';


const mockRouter = {
  route: '/register',
  pathname: '/register',
  query: {},
  asPath: '/register',
  router: {
    push: jest.fn(),
  }
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

function useSignIn() {
  const handleSend = jest.fn();
  const isLoading = false;
  return { handleSend, isLoading };
}

function useSignUp() {
  const handleSend = jest.fn();
  const isLoading = false;
  return { handleSend, isLoading };
}


describe("Register componet", () => {

  beforeEach(() => {
    useRouter.mockImplementation(() => mockRouter);
  });

  it('renders the component', () => {
    const { getByTestId } = render(<Register />);

    const container = getByTestId('register-container')

    expect(container).toBeInTheDocument();
  });

  it('should render the form fields and toggle between sign-in and sign-up', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Register />);

    // Check if the component renders the initial sign-in form
    const signInForm = getByTestId('sign-in-form');
    expect(signInForm).toBeInTheDocument();

    // Check if the "Sign Up" button is present and can be clicked
    const signUpButton = getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
    fireEvent.click(signUpButton);

    // Wait for the component to re-render and display the sign-up form
    await waitFor(() => {
      const signUpForm = getByTestId('sign-up-form');
      expect(signUpForm).toBeInTheDocument();
    });

    // Check if the "Sign In" button is present and can be clicked to switch back
    const signInButton = getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
    fireEvent.click(signInButton);

    // Wait for the component to re-render and display the sign-in form again
    await waitFor(() => {
      expect(signInForm).toBeInTheDocument();
    });

  });

  it('should handle sign-in form submission', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Register />);

    // Find and populate the form fields
    const userNameInput = getByLabelText('E-mail address');
    const passwordInput = getByLabelText('Password');
    fireEvent.change(userNameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Submit the sign-in form
    const signInButton = getByText('Sign In');
    act(() => {
      fireEvent.click(signInButton)
    });


    // expect(useSignIn().handleSend).toHaveBeenCalled();

    // const mockSignIn = jest.fn();
    // jest.spyOn(Register, 'sendSignInRequest').mockReturnValue({
    //   isLoading: false,
    //   handleSend: mockSignIn,
    // });

    // const mockRouter = {
    //   push: jest.fn(), // Mock the push function
    // };
    // useRouter.mockReturnValue(mockRouter);

    // // You can mock a successful sign-in response and assert the router navigation here
    // // For example, you can use jest.mock to mock useRouter behavior

    // // Wait for any asynchronous operations to complete (e.g., API requests)
    // await waitFor(() => {
    //   // Assert that the router navigated to the 'problems' page
    //   expect(mockRouter.push).toHaveBeenCalledWith('problems');
    // });
  });

  // it('should handle sign-up form submission', async () => {
  //   const { getByTestId, getByText, getByLabelText } = render(<Register />);

  //   // Switch to the sign-up form
  //   const signUpButton = getByText('Sign Up');
  //   fireEvent.click(signUpButton);

  //   // Find and populate the form fields
  //   const userNameInput = getByLabelText('Username');
  //   const passwordInput = getByLabelText('Password');
  //   const retypePasswordInput = getByLabelText('Re type password');
  //   fireEvent.change(userNameInput, { target: { value: 'newuser' } });
  //   fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
  //   fireEvent.change(retypePasswordInput, { target: { value: 'newpassword' } });

  //   // Submit the sign-up form
  //   const signUpSubmitButton = getByText('Sign Up');
  //   fireEvent.click(signUpSubmitButton);

  //   // You can mock a successful sign-up response and assert the router navigation here
  //   // For example, you can use jest.mock to mock useRouter behavior

  //   // Wait for any asynchronous operations to complete (e.g., API requests)
  //   await waitFor(() => {
  //     // Assert that the router navigated to the 'problems' page
  //     expect(router.push).toHaveBeenCalledWith('problems');
  //   });
  // });
})
