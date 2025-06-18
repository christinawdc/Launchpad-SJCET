import React, { useState } from "react";
import automatedSVG from '../assets/automated-ai-model-testing-&-validation.svg';
import appleLogo from '../assets/apple.png';
import googleLogo from '../assets/google.png';
import githubLogo from '../assets/git.jpg';
import facebookLogo from '../assets/face.png';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert("Account created! (Demo)");
  };

  return (
    <div className="w-screen h-screen relative flex items-center justify-center font-poppins overflow-hidden bg-white">
      {/* SVG Curved green background using provided SVG path */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ minWidth: '100vw', minHeight: '100vh' }}
      >
        <path
          d="M 0,700 L 0,262 C 158.93333333333334,305.33333333333337 317.8666666666667,348.6666666666667 472,312 C 626.1333333333333,275.3333333333333 775.4666666666667,158.66666666666669 936,137 C 1096.5333333333333,115.33333333333333 1268.2666666666667,188.66666666666666 1440,262 L 1440,700 L 0,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="#E8F5DB"
          fillOpacity="1"
        />
      </svg>
      {/* Main content */}
      <div className="relative z-10 flex w-full h-full items-center justify-center">
        {/* Left Illustration */}
        <div className="flex-1 flex items-center justify-center h-full">
          <img src={automatedSVG} alt="Illustration" className="max-h-[420px] w-auto object-contain" />
        </div>
        {/* Signup Form Card */}
        <div className="w-full max-w-[430px] bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-stretch min-h-[600px] mr-12">
          <h1 className="text-black text-3xl font-bold mb-2">Create an account</h1>
          <div className="text-[13px] text-black mb-6 font-medium">
            Already have an account? <a href="/login" className="text-[#4F46E5]">Log in</a>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off" className="w-full">
            <div className="flex gap-3 mb-4">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-md border-none bg-[#DBF0C3] text-black text-base placeholder-black focus:outline-none"
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-md border-none bg-[#DBF0C3] text-black text-base placeholder-black focus:outline-none"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="College Mail"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border-none bg-[#DBF0C3] text-black mb-4 text-base placeholder-black focus:outline-none"
              required
            />
            <div className="relative mb-1">
            <input
              name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
                className="w-full p-3 rounded-md border-none bg-[#DBF0C3] text-black text-base placeholder-black focus:outline-none"
              required
            />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-black rounded-e-md focus:outline-none"
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg className="shrink-0 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="flex justify-end mb-2">
              <a href="#" className="text-[13px] text-black/70 hover:underline">Forgot Password?</a>
            </div>
            <div className="flex items-start mb-4">
              <label className="checkbox-container flex items-center cursor-pointer select-none">
              <input
                  type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                  className="hidden peer"
                required
              />
                <svg viewBox="0 0 64 64" height="1.25em" width="1.25em" className="ml-0 mr-2">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="checkbox-path transition-all"
                    style={{
                      fill: "none",
                      stroke: "#4ade80",
                      strokeWidth: 6,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transition: "stroke-dasharray 0.5s cubic-bezier(.42,0,.58,1), stroke-dashoffset 0.5s cubic-bezier(.42,0,.58,1)",
                      strokeDasharray: form.terms ? "70.51 9999999" : "241 9999999",
                      strokeDashoffset: form.terms ? "-262.27" : "0"
                    }}
                  />
                </svg>
                <span className="text-black text-[13px] font-poppins leading-tight">
                  I agree to the terms and conditions and privacy policy
              </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-black text-white font-semibold text-lg mb-4 transition-colors duration-200 hover:bg-gray-800 font-poppins"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-[#3a3350]" />
            <span className="text-black text-[13px] mx-4 whitespace-nowrap font-poppins">or continue with</span>
            <div className="flex-1 h-px bg-[#3a3350]" />
          </div>
          <div className="flex gap-8 justify-center w-full mt-2">
            {/* Google */}
            <button type="button" className="p-3 border-white rounded-full border hover:scale-110 transition-all hover:bg-[#E8F5DB] bg-white shadow-md">
              <img src={googleLogo} alt="Google" className="w-7 h-7 object-contain" />
            </button>
            {/* Apple */}
            <button type="button" className="p-3 border-white rounded-full border hover:scale-110 transition-all hover:bg-[#E8F5DB] bg-white shadow-md">
              <img src={appleLogo} alt="Apple" className="w-7 h-7 object-contain" />
            </button>
            {/* GitHub */}
            <button type="button" className="p-3 border-white rounded-full border hover:scale-110 transition-all hover:bg-[#E8F5DB] bg-white shadow-md">
              <img src={githubLogo} alt="GitHub" className="w-7 h-7 object-contain" />
            </button>
            {/* Facebook */}
            <button type="button" className="p-3 border-white rounded-full border hover:scale-110 transition-all hover:bg-[#E8F5DB] bg-white shadow-md">
              <img src={facebookLogo} alt="Facebook" className="w-7 h-7 object-contain" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
.checkbox-container input:focus + svg {
  box-shadow: 0 0 0 2px #bbf7d0;
}
`}</style>
    </div>
  );
};

export default Signup;