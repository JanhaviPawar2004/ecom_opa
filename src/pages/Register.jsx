import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";
import loginImage from "../images/loginImage.png";
import { FaUser } from "react-icons/fa";

function Register() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");

  const handleRegister = async(e)=>{
    e.preventDefault();

    if(!email || !password || !name){
      toast.error("Please fill required fields");
      return;
    }

    try{

      await API.post("/users/register",{
        email,
        password,
        name,
        address
      });

      toast.success("Registration Successful");

      setTimeout(()=>{
        navigate("/login");
      },1500);

    }catch(err){

      toast.error(err.response?.data?.message || "Registration failed");
    }

  };

  return (

    <div className="h-screen flex items-center justify-center bg-cover bg-center">

      <div className="flex w-[900px] h-[620px] bg-white shadow-2xl overflow-hidden">

        {/* LEFT IMAGE */}

        <div className="w-1/2">
          <img
          src={loginImage}
          alt="register"
          className="w-full h-full object-cover"
          />
        </div>


        {/* RIGHT FORM */}

        <div className="w-1/2 flex items-center justify-center">

          <div className="w-4/5">

            <div className="flex justify-center text-4xl text-gray-500 mb-4">
             <FaUser/>
            </div>

            <h2 className="text-3xl text-blue-400 text-center mb-2 font-dancing">
              Create Account
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Register to access the platform
            </p>


            <form onSubmit={handleRegister}>

              {/* NAME */}

              <label className="text-sm">
                Name <span className="text-red-500">*</span>
              </label>

              <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-1 rounded mb-4"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />


              {/* EMAIL / USERNAME */}

              <label className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>

              <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-1 rounded mb-4"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />


              {/* PASSWORD */}

              <label className="text-sm">
                Password <span className="text-red-500">*</span>
              </label>

              <input
              type="password"
              placeholder="Enter password"
              className="w-full border p-1 rounded mb-4"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />


              {/* ADDRESS */}

              <label className="text-sm">
                Address
              </label>

              <input
              type="text"
              placeholder="Enter address"
              className="w-full border p-1 rounded mb-6"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              />


              {/* REGISTER BUTTON */}

              <button
              className="w-full bg-blue-400 text-white p-3 rounded hover:bg-blue-500 transition">

                Register

              </button>

            </form>


            <p className="text-center mt-6 text-sm">

              Already have an account?

              <span
              onClick={()=>navigate("/login")}
              className="text-blue-500 cursor-pointer ml-1">

                Login

              </span>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;