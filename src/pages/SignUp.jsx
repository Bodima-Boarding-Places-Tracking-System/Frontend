import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  LuAward,
  LuEye,
  LuEyeOff,
  LuLock,
  LuMail,
  LuPhone,
  LuUser,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  checkPasswordStrength,
  validateEmail,
  validateMobileNumber,
  validateName,
  validatePassword,
  validateWebmail,
} from "../Validators";
import { Alert } from "flowbite-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [passwordStrengthColor, setPasswordStrengthColor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(formdata.firstName)) {
      setFormError("First name must only contain letters");
      return;
    } else {
      setFormError(null);
    }

    if (!validateName(formdata.lastName)) {
      setFormError("Last name must only contain letters");
      return;
    } else {
      setFormError(null);
    }

    if (formdata.role === undefined) {
      setFormError("Please select your role");
      return;
    } else {
      setFormError(null);
    }

    if (formdata.role === "student") {
      if (!validateWebmail(formdata.webmail)) {
        setFormError("Your webmail is not valid");
        return;
      } else {
        setFormError(null);
      }
    }

    if (formdata.role && formdata.role === "boarding-owner") {
      if (!validateEmail(formdata.email)) {
        setFormError("Please enter a valid email");
        return;
      } else {
        setFormError(null);
      }
    }

    if (formdata.role && formdata.role === "boarding-owner") {
      if (!validateMobileNumber(formdata.phone)) {
        setFormError("Please enter a valid phone number");
        return;
      } else {
        setFormError(null);
      }
    }

    if (!validatePassword(formdata.password).status) {
      setFormError(validatePassword(formdata.password).message);
      return;
    } else {
      setFormError(null);
    }

    console.log(formdata);
  };

  const handlePasswordStrengthChecker = (e) => {
    const strength = checkPasswordStrength(e.target.value);
    setPasswordStrength(strength);
    switch (strength) {
      case "Too weak":
        setPasswordStrengthColor("red-500");
        break;
      case "Weak":
        setPasswordStrengthColor("yellow-500");
        break;
      case "Normal":
        setPasswordStrengthColor("indigo-500");
        break;
      case "Strong":
        setPasswordStrengthColor("green-500");
        break;
      default:
        setPasswordStrengthColor("gray-200");
        break;
    }
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-lg md:max-w-md mx-auto flex flex-col mt-10 md:mt-12 mb-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">Sign Up</h2>
          <p>Please fill the details below</p>
        </div>
        <div className="mt-8">
          <form
            className="flex flex-col items-end gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuUser className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                type="text"
                id="firstName"
                required
                placeholder="First name"
                onChange={(e) => {
                  setFormData({ ...formdata, firstName: e.target.value });
                }}
              />
            </div>
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuUser className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                type="text"
                id="lastName"
                required
                placeholder="Last name"
                onChange={(e) => {
                  setFormData({ ...formdata, lastName: e.target.value });
                }}
              />
            </div>
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuAward className="absolute left-2 opacity-50" size={22} />
              <select
                className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 py-3"
                type="text"
                id="role"
                required
                placeholder="What are you?"
                onChange={(e) => {
                  setFormData({ ...formdata, role: e.target.value });
                }}
                defaultValue="unselected"
              >
                <option value={"unselected"} disabled>
                  What are you?
                </option>
                <option value="student">Student</option>
                <option value="boarding-owner">Boarding Owner</option>
              </select>
            </div>
            {formdata.role === "student" && (
              <>
                <div className="w-full relative flex items-center border-2 rounded border-gray-200">
                  <LuMail className="absolute left-2 opacity-50" size={22} />
                  <input
                    className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                    type="email"
                    id="webmail"
                    required={formdata.role === "student" ? true : false}
                    placeholder="Webmail"
                    onChange={(e) => {
                      setFormData({ ...formdata, webmail: e.target.value });
                    }}
                  />
                </div>
              </>
            )}
            {formdata.role === "boarding-owner" && (
              <>
                <div className="w-full relative flex items-center border-2 rounded border-gray-200">
                  <LuMail className="absolute left-2 opacity-50" size={22} />
                  <input
                    className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                    type="email"
                    id="email"
                    required={formdata.role === "boarding-owner" ? true : false}
                    placeholder="Email"
                    onChange={(e) => {
                      setFormData({ ...formdata, email: e.target.value });
                    }}
                  />
                </div>
                <div className="w-full relative flex items-center border-2 rounded border-gray-200">
                  <LuPhone className="absolute left-2 opacity-50" size={22} />
                  <input
                    className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                    type="text"
                    id="phone"
                    required={formdata.role === "boarding-owner" ? true : false}
                    placeholder="Contact No"
                    onChange={(e) => {
                      setFormData({ ...formdata, phone: e.target.value });
                    }}
                  />
                </div>
              </>
            )}
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuLock className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 placeholder:text-gray-600 py-3"
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="Password"
                onChange={(e) => {
                  handlePasswordStrengthChecker(e);
                  setFormData({ ...formdata, password: e.target.value });
                }}
              />
              {showPassword ? (
                <LuEye
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  className="absolute right-2 text-[#003566] cursor-pointer"
                  size={22}
                />
              ) : (
                <LuEyeOff
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  className="absolute right-2 text-[#003566] cursor-pointer"
                  size={22}
                />
              )}
            </div>
            <div className="w-full space-y-2 mb-2">
              <div className="flex justify-between">
                <span>Password strength</span>
                <span className={`font-medium text-${passwordStrengthColor}`}>{passwordStrength}</span>
              </div>
              <div className="flex justify-between flex-1 gap-4">
                <div
                  className={`border-b-4 border-gray-200 flex flex-1 rounded border-${passwordStrengthColor}`}
                ></div>
                <div
                  className={
                    passwordStrength === "Normal" ||
                    passwordStrength === "Strong" ||
                    passwordStrength === "Weak"
                      ? `border-b-4 border-gray-200 flex flex-1 rounded border-${passwordStrengthColor}`
                      : `border-b-4 border-gray-200 flex flex-1 rounded`
                  }
                ></div>
                <div
                  className={
                    passwordStrength === "Normal" ||
                    passwordStrength === "Strong"
                      ? `border-b-4 border-gray-200 flex flex-1 rounded border-${passwordStrengthColor}`
                      : `border-b-4 border-gray-200 flex flex-1 rounded`
                  }
                ></div>
                <div
                  className={
                    passwordStrength === "Strong"
                      ? `border-b-4 border-gray-200 flex flex-1 rounded border-${passwordStrengthColor}`
                      : `border-b-4 border-gray-200 flex flex-1 rounded`
                  }
                ></div>
              </div>
            </div>
            {formError && (
              <Alert
                className="w-full"
                color={"failure"}
                style={{ fontSize: 16 }}
              >
                {formError}
              </Alert>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-300 hover:bg-[#003566] hover:text-white font-medium rounded py-3"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center gap-2 mt-5">
            Have an account?
            <Link
              className="text-[#003566] font-medium hover:underline"
              to={"/login"}
            >
              Log In
            </Link>
          </div>
          {/* <div className="flex flex-col gap-4 mt-5">
            <div className="flex justify-between items-center text-gray-400">
              <hr className="flex-1" />
              <span className="text-center mx-4">Or continue with</span>
              <hr className="flex-1" />
            </div>
            <div className="self-center">
              <div className="flex items-center gap-2 cursor-pointer px-4">
                <FcGoogle className="" size={24} />
                <span className="">Google</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
