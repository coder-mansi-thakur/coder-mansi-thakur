import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('renders the button with the "Submit" text', async () => {
    const { getByText, container } = render(<Button />);
    await waitFor(() => {
      const submitButton = getByText('Submit');
      expect(submitButton).toBeInTheDocument();
    });
  });

  it('renders the loader when isLoading is true', () => {
    const { getByTestId } = render(<Button isLoading={true} />);
    const loader = getByTestId('loader'); // Assuming you have a data-testid on the Loader component
    expect(loader).toBeInTheDocument();
  });

  it('does not render the loader when isLoading is false', () => {
    const { queryByTestId } = render(<Button isLoading={false} />);
    const loader = queryByTestId('loader'); // Assuming you have a data-testid on the Loader component
    expect(loader).toBeNull();
  });
});
``
