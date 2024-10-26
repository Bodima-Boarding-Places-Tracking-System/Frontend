import { Alert } from "flowbite-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff, LuLock, LuMail, LuAward } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../Validators";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (formdata.role === undefined || formdata.role === "unselected") {
      setFormError("Please select your role");
      return;
    }

    if (!validateEmail(formdata.email)) {
      setFormError("Please enter a valid email");
      return;
    }

    if (formdata.password.length < 8) {
      setFormError("Password must be at least 8 characters long");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://localhost:7100/api/User/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        setFormError(data.error);
        return;
      }
      if (res.ok) {
        console.log(data);
        toast.success("Loggin successful!");
        dispatch(setCredentials({ user: data.user, token: data.token }));
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setFormError(error.response);
      console.log(error);
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
            <div className="w-full relative flex items-center border rounded-lg overflow-hidden border-gray-200">
              <LuAward className="absolute left-2 opacity-50" size={22} />
              <select
                className="ps-10 border-0 focus:ring-0 flex-1 text-gray-600 py-3"
                type="text"
                id="role"
                required
                placeholder="Log in as"
                onChange={(e) => {
                  setFormData({ ...formdata, role: e.target.value });
                }}
                defaultValue="unselected"
              >
                <option value={"unselected"} disabled>
                  Log in as a
                </option>
                <option value="student">Student</option>
                <option value="boarding-owner">Boarding Owner</option>
              </select>
            </div>
            <div className="w-full relative flex items-center border rounded-lg overflow-hidden border-gray-200">
              <LuMail className="absolute left-2 opacity-50" size={22} />
              <input
                className="ps-10 border-0 focus:ring-0 flex-1 py-3"
                type="email"
                required
                placeholder={formdata.role === "student" ? "Webmail" : "Email"}
                onChange={(e) => {
                  setFormData({ ...formdata, email: e.target.value });
                }}
              />
            </div>
            <div className="w-full relative flex items-center border rounded-lg overflow-hidden border-gray-200">
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
              disabled={loading}
              className="w-full bg-yellow-300 hover:bg-[#003566] hover:text-white font-medium rounded-lg py-3 disabled:opacity-50 disabled:hover:bg-yellow-300 disabled:hover:text-black"
            >
              Login
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
