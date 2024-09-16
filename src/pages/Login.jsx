import { Alert } from "flowbite-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff, LuLock, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../Validators";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({});
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formdata.email)) {
      setFormError("Please enter a valid email");
      return;
    } else {
      setFormError(null);
    }

    if (!validatePassword(formdata.password).status) {
      setFormError(validatePassword(formdata.password).message);
      return;
    } else {
      setFormError(null);
    }
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-lg md:max-w-md mx-auto flex flex-col mt-10 md:mt-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">Login</h2>
          <p>Please enter your email and password</p>
        </div>
        <div className="mt-8">
          <form
            className="flex flex-col items-end gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuMail className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 py-3"
                type="email"
                required
                placeholder="Email"
                onChange={(e) => {
                  setFormData({ ...formdata, email: e.target.value });
                }}
              />
            </div>
            <div className="w-full relative flex items-center border-2 rounded border-gray-200">
              <LuLock className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 py-3"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                onChange={(e) => {
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
            <Link className=" font-medium text-[#003566] hover:underline">
              Forgot password?
            </Link>
            {formError && (
              <Alert
                className="w-full"
                style={{ fontSize: 16 }}
                color={"failure"}
              >
                {formError}
              </Alert>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-300 hover:bg-[#003566] hover:text-white font-medium rounded py-3"
            >
              Log In
            </button>
          </form>
          <div className="flex items-center gap-2 mt-5">
            Don&#39;t have an account?
            <Link
              className="text-[#003566] font-medium hover:underline"
              to={"/signup"}
            >
              Sign Up
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

export default Login;
