import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckSize } from "@/hooks/check-size";
import { useToast } from "@/hooks/use-toast";
import { validateEmail, validateWebmail } from "@/lib/validations";
import { Description } from "@radix-ui/react-toast";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    role: selectedRole,
  });

  const isSmaller = CheckSize();
  const { toast } = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedRole === "student") {
      const isWebmailValid = validateWebmail(formdata.email);
      if (!isWebmailValid) {
        return toast({
          title: "Invalid Webmail",
          description: "Please enter a valid webmail address",
          variant: "destructive",
          duration: 2500,
        });
      }
    } else {
      const isEmailValid = validateEmail(formdata.email);
      if (!isEmailValid) {
        return toast({
          title: "Invalid Email",
          description: "Please enter a valid email address",
          variant: "destructive",
          duration: 2500,
        });
      }
    }

    console.log(formdata);
  };

  const handleTabChange = (value) => {
    setSelectedRole(value);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");
    if (tab) {
      setSelectedRole(tab);
    }
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("tab", selectedRole);
    history.pushState(null, "", `?${queryParams.toString()}`);
  }, [selectedRole, location.search]);

  useEffect(() => {
    formdata.role = selectedRole;
  }, [selectedRole]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:max-w-7xl mx-auto">
        <div className="mb-4 flex justify-center">
          <Link to={"/"} className="text-[1.75rem] font-bold">
            Bodima.<span className="text-primary-500">lk</span>
          </Link>
        </div>
        <Tabs
          value={selectedRole}
          className={`${isSmaller ? "w-[100%]" : "w-[340px]"}`}
          onValueChange={(value) => {
            handleTabChange(value);
          }}
        >
          <TabsList className="grid w-full grid-cols-2 border p-[0.4rem] h-fit rounded-lg">
            <TabsTrigger className="rounded-l-lg" value="student">
              Student
            </TabsTrigger>
            <TabsTrigger className="rounded-r-lg" value="boarding-owner">
              Boarding owner
            </TabsTrigger>
          </TabsList>
          <TabsContent value="boarding-owner">
            <Card className="rounded-lg">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Please enter your login details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 p-0 px-6 pb-2">
                  <div className="flex flex-col gap-3">
                    <Input
                      type="email"
                      placeholder="Email"
                      size=""
                      required
                      value={formdata.email}
                      onChange={(e) =>
                        setFormData({ ...formdata, email: e.target.value })
                      }
                      className="h-auto w-full p-[0.65rem] focus-visible:ring-secondary-700 !text-[0.95rem]"
                    />
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        size=""
                        required
                        value={formdata.password}
                        onChange={(e) =>
                          setFormData({
                            ...formdata,
                            password: e.target.value,
                          })
                        }
                        className="h-auto w-full p-[0.65rem] focus-visible:ring-secondary-700 !text-[0.95rem]"
                      />
                      {!showPassword ? (
                        <EyeOff
                          className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-primary-500 cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      ) : (
                        <Eye
                          className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-primary-500 cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      )}
                    </div>
                    <p className="w-fit text-[0.9rem] self-end cursor-pointer hover:underline">
                      Forgot password?
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col flex-1 gap-2 mt-2">
                    <Button size="lg" type="submit" className="text-[1rem]">
                      <Loader2 className="animate-spin" />
                      Sign In
                    </Button>
                    {/* <div className="flex items-center gap-3">
                      <hr className="flex-1" />
                      <span>Or</span>
                      <hr className="flex-1" />
                    </div>
                    <Button
                      size="lg"
                      variant="outline"
                      type="submit"
                      className="  bg-gray-900 hover:bg-gray-900/90 !text-white"
                    >
                      <img
                        src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
                        className="w-4 h-4"
                        alt=""
                      />
                      Continue with Google
                    </Button> */}
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="student">
            <Card className="rounded-lg">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Please enter your login details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 p-0 px-6 pb-2">
                  <div className="flex flex-col gap-3">
                    <Input
                      type="email"
                      placeholder="Webmail"
                      size=""
                      required
                      value={formdata.email}
                      onChange={(e) =>
                        setFormData({ ...formdata, email: e.target.value })
                      }
                      className="h-auto w-full p-[0.65rem] focus-visible:ring-secondary-700 !text-[0.95rem]"
                    />
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        size=""
                        required
                        value={formdata.password}
                        onChange={(e) =>
                          setFormData({
                            ...formdata,
                            password: e.target.value,
                          })
                        }
                        className="h-auto w-full p-[0.65rem] focus-visible:ring-secondary-700 !text-[0.95rem]"
                      />
                      {!showPassword ? (
                        <EyeOff
                          className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-primary-500 cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      ) : (
                        <Eye
                          className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-primary-500 cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      )}
                    </div>
                    <p className="w-fit text-[0.9rem] self-end cursor-pointer hover:underline">
                      Forgot password?
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col flex-1 gap-2 mt-2">
                    <Button size="lg" type="submit" className="text-[1rem]">
                      <Loader2 className="animate-spin" />
                      Sign In
                    </Button>
                    {/* <div className="flex items-center gap-3">
                      <hr className="flex-1" />
                      <span>Or</span>
                      <hr className="flex-1" />
                    </div>
                    <Button
                      size="lg"
                      variant="outline"
                      type="submit"
                      className="  bg-gray-900 hover:bg-gray-900/90 !text-white"
                    >
                      <img
                        src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
                        className="w-4 h-4"
                        alt=""
                      />
                      Continue with Google
                    </Button> */}
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        <p className="text-slate-500 mt-3 text-[0.9rem] text-center">
          Don't have an account?{" "}
          <Link className="text-primary-500 hover:underline" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
