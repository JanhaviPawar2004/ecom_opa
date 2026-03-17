import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import loginImage from "../images/loginImage.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
  
    try {
      const res = await API.post("/users/login", {
        email,
        password
      });
  
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login Successful");
      } else {
        toast.error(res.data.message || "Invalid credentials");
      }
  
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (

    <div className="h-screen flex items-center justify-center bg-cover bg-center">

      {/* LOGIN CARD */}

      <div className="flex w-[900px] h-[620px] bg-white shadow-2xl overflow-hidden">

        {/* LEFT IMAGE SECTION */}

        <div className="w-1/2 relative">

          <img
          src={loginImage}
          alt="login"
          className="w-full h-full object-cover"
          />

        </div>


        {/* RIGHT FORM SECTION */}

        <div className="w-1/2 flex items-center justify-center">

          <div className="w-4/5">

            {/* ICON */}

            
<div className="flex justify-center text-4xl text-gray-500 mb-4">
  <FaUser />
</div>

            {/* TITLE */}

            <h2 className="text-3xl text-blue-400 text-center mb-3 font-dancing">
  Welcome Back
</h2>
            <p className="text-center text-gray-500 mb-8">
              Enter your credentials to access your account
            </p>


            {/* FORM */}

            <form onSubmit={handleLogin}>

              {/* EMAIL */}

              <label className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>

              <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded mb-4"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />


              {/* PASSWORD */}

              <label className="text-sm">
                Password <span className="text-red-500">*</span>
              </label>

              <input
              type="password"
              placeholder="Enter your password"
              className="w-full border p-3 rounded mb-6"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />


              {/* LOGIN BUTTON */}

              <button
              className="w-full bg-blue-400 text-white p-3 rounded hover:bg-blue-500 transition">

                Login

              </button>

            </form>


            <p
 className="text-sm text-blue-500 cursor-pointer mb-4"
 onClick={()=>navigate("/forgot-password")}
>
Forgot Password?
</p>

            {/* REGISTER */}

            <p className="text-center mt-6 text-sm">

              Don’t have an account?

              <span className="text-blue-500 cursor-pointer ml-1" onClick={()=>navigate("/register")}>

                Register

              </span>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;