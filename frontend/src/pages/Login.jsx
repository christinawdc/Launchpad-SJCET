import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appleLogo from '../assets/apple.png';
import googleLogo from '../assets/google.png';
import githubLogo from '../assets/git.jpg';
import facebookLogo from '../assets/face.png';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in! (Demo)");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center font-poppins" style={{ background: '#E8FDD8' }}>
      <div className="bg-white rounded-3xl shadow-lg px-10 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8 text-black">Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="w-full flex flex-col items-center">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#DBF0C3] text-black mb-4 text-base placeholder-black border-none focus:outline-none"
            required
          />
          <div className="relative w-full mb-4">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#DBF0C3] text-black text-base placeholder-black border-none focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500 focus:outline-none"
              tabIndex={0}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {!showPassword ? (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </>
                ) : (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </>
                )}
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-black text-white font-bold text-lg mb-6 transition-colors duration-200 hover:bg-gray-800 font-poppins"
          >
            Login
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm mx-4 whitespace-nowrap font-poppins">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex gap-8 justify-center w-full mb-6">
          <button type="button" className="p-3 rounded-full transition-all hover:bg-[#E8F5DB]">
            <img src={googleLogo} alt="Google" className="w-7 h-7 object-contain" />
          </button>
          <button type="button" className="p-3 rounded-full transition-all hover:bg-[#E8F5DB]">
            <img src={appleLogo} alt="Apple" className="w-7 h-7 object-contain" />
          </button>
          <button type="button" className="p-3 rounded-full transition-all hover:bg-[#E8F5DB]">
            <img src={githubLogo} alt="GitHub" className="w-7 h-7 object-contain" />
          </button>
          <button type="button" className="p-3 rounded-full transition-all hover:bg-[#E8F5DB]">
            <img src={facebookLogo} alt="Facebook" className="w-7 h-7 object-contain" />
          </button>
        </div>
        <div className="text-center w-full text-black text-sm">
          Create new Account?{' '}
          <button onClick={() => navigate('/signup')} className="text-blue-500 hover:underline font-medium bg-transparent border-none outline-none cursor-pointer">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Login; 