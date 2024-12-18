export const checkValidation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    
    if (!isEmailValid) return "Email is incorrect";
  if (!isPasswordValid) return "Password is incorrect";
  
  return null;
};

  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  // if (!isNameValid) return "User Name is incorrect";