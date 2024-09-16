export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const lowerRegex = /^(?=.*[a-z])/;
  const upperRegex = /^(?=.*[A-Z])/;
  const specialRegex = /^(?=.*[@$!%*?&#])/;
  const digitRegex = /^(?=.*\d)/;
  if (password.length >= 8) {
    if (lowerRegex.test(password)) {
      if (upperRegex.test(password)) {
        if (digitRegex.test(password)) {
          if (specialRegex.test(password)) {
            return { status: true, message: null };
          } else {
            return {
              status: false,
              message:
                "Password must contain at least one special character (i.e. @,$,!,%,*,?,&,#)",
            };
          }
        } else {
          return {
            status: false,
            message: "Password must contain at least one digit",
          };
        }
      } else {
        return {
          status: false,
          message: "Password must contain at least one uppercase letter",
        };
      }
    } else {
      return {
        status: false,
        message: "Password must contain at least one lowercase letter",
      };
    }
  } else {
    return {
      status: false,
      message: "Password must be at least 8 characters long",
    };
  }
};

export const validateName = (name) => {
  const letters = /^[a-zA-Z]+$/;
  return letters.test(name.trim());
};
