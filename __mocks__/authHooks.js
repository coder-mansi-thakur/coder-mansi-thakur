export function useSignIn() {
  const handleSend = jest.fn();
  const isLoading = false;
  return { handleSend, isLoading };
}

export function useSignUp() {
  const handleSend = jest.fn();
  const isLoading = false;
  return { handleSend, isLoading };
}
