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
    if (
      lowerRegex.test(password) &&
      upperRegex.test(password) &&
      digitRegex.test(password) &&
      specialRegex.test(password)
    ) {
      return { status: true, message: "" };
    } else {
      return {
        status: false,
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
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

export const validateWebmail = (webmail) => {
  const webmailRegex = /^[a-zA-Z]+\.?\d{2}@uom\.lk$/;
  return webmailRegex.test(webmail);
};

export const validateMobileNumber = (mobileNumber) => {
  const mobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
  return mobileRegex.test(mobileNumber);
};

export const checkPasswordStrength = (password) => {
  const lowerRegex = /^(?=.*[a-z])/;
  const upperRegex = /^(?=.*[A-Z])/;
  const specialRegex = /^(?=.*[@$!%*?&#])/;
  const digitRegex = /^(?=.*\d)/;

  if (
    (lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      !digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      upperRegex.test(password) &&
      !digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      !digitRegex.test(password) &&
      specialRegex.test(password))
  ) {
    return "Too weak";
  }

  if (
    (lowerRegex.test(password) &&
      upperRegex.test(password) &&
      !digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      upperRegex.test(password) &&
      digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      upperRegex.test(password) &&
      !digitRegex.test(password) &&
      specialRegex.test(password)) ||
    (lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      !digitRegex.test(password) &&
      specialRegex.test(password))
  ) {
    return "Weak";
  }

  if (
    (lowerRegex.test(password) &&
      upperRegex.test(password) &&
      digitRegex.test(password) &&
      !specialRegex.test(password)) ||
    (lowerRegex.test(password) &&
      upperRegex.test(password) &&
      !digitRegex.test(password) &&
      specialRegex.test(password)) ||
    (lowerRegex.test(password) &&
      !upperRegex.test(password) &&
      digitRegex.test(password) &&
      specialRegex.test(password)) ||
    (!lowerRegex.test(password) &&
      upperRegex.test(password) &&
      digitRegex.test(password) &&
      specialRegex.test(password))
  ) {
    return "Normal";
  }

  if (
    lowerRegex.test(password) &&
    upperRegex.test(password) &&
    digitRegex.test(password) &&
    specialRegex.test(password) &&
    password.length >= 8
  ) {
    return "Strong";
  } else {
    return "Normal";
  }
};
