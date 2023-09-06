export const regex = {
  //Minimum eight characters, at least one letter, one number and one special character:
  passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,

  emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}