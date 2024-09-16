import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formdata);
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="md:max-w-md md:mx-auto flex flex-col mt-10 md:mt-20 mb-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">Sign Up</h2>
          <p>Please fill the details below</p>
        </div>
        <div className="mt-8">
          <form
            className="flex flex-col items-end gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
              <LuUser className=" opacity-50" size={22} />
              <input
                className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
                type="text"
                required
                placeholder="Name"
                onChange={(e) => {
                  setFormData({ ...formdata, name: e.target.value });
                }}
              />
            </div>
            <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
              <LuAward className=" opacity-50" size={22} />
              <select
                className="ps-4 focus:outline-none flex-1 text-gray-600"
                type="text"
                required
                placeholder="What are you?"
                onChange={(e) => {
                  setFormData({ ...formdata, role: e.target.value });
                }}
                defaultValue={"unselected"}
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
                <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
                  <LuMail className=" opacity-50" size={22} />
                  <input
                    className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
                    type="email"
                    required
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
                <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
                  <FaIdCard className=" opacity-50" size={22} />
                  <input
                    className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
                    type="text"
                    placeholder="Registration No (Optional)"
                    onChange={(e) => {
                      setFormData({ ...formdata, regNo: e.target.value });
                    }}
                  />
                </div>
                <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
                  <LuMail className=" opacity-50" size={22} />
                  <input
                    className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => {
                      setFormData({ ...formdata, email: e.target.value });
                    }}
                  />
                </div>
                <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
                  <LuPhone className=" opacity-50" size={22} />
                  <input
                    className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
                    type="text"
                    required
                    placeholder="Contact No"
                    onChange={(e) => {
                      setFormData({ ...formdata, phone: e.target.value });
                    }}
                  />
                </div>
              </>
            )}
            <div className="w-full flex items-center border-2 rounded border-gray-200 p-3">
              <LuLock className=" opacity-50" size={22} />
              <input
                className="ps-4 focus:outline-none flex-1 text-gray-600 placeholder:text-gray-600"
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
                  className="text-[#003566] cursor-pointer"
                  size={22}
                />
              ) : (
                <LuEyeOff
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  className="text-[#003566] cursor-pointer"
                  size={22}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFC800] hover:bg-[#FFD60A] font-medium rounded py-3"
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
