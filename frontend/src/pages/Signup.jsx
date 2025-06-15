import React, { useState, useEffect } from "react";
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/sign2.png';
import sign3 from '../assets/sign3.png';
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/apple.png';
import googleLogo1 from '../assets/google1.png';
import appleLogo1 from '../assets/apple1.png';

const images = [sign1, sign2, sign3];
const quotes = [
  '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
  '"What is now proved was once only imagined." - William Blake',
  '"If you want something new, you have to stop doing something old." - Peter Drucker',
];

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [currentImg, setCurrentImg] = useState(0);
  const [prevImg, setPrevImg] = useState(0);
  const [fade, setFade] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [googleHover, setGoogleHover] = useState(false);
  const [appleHover, setAppleHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImg(currentImg);
      setFade(true);
      setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 800);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentImg]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDotClick = (idx) => {
    setCurrentImg(idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    alert("Account created! (Demo)");
  };

  return (
    <div className="w-screen h-screen bg-[#2d253a] flex items-start justify-center overflow-hidden gap-0 p-0 font-poppins">
      <div className="flex-1 h-[calc(100vh-16px)] m-2 rounded-xl shadow-2xl overflow-hidden flex flex-col justify-between relative">
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 z-0 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: `url(${images[prevImg]}) center/cover no-repeat` }}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 z-0 ${fade ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: `url(${images[currentImg]}) center/cover no-repeat` }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#221b36]/55 z-10 rounded-xl" />
        <div className="relative z-20 flex justify-between items-center px-6 pt-5">
          <div className="font-bold text-3xl text-white tracking-wider font-sans rounded-lg px-4 py-1 bg-transparent">LOGO</div>
          <a
            href="/"
            className="back-to-website-btn absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 text-white rounded-full px-4 py-1.5 text-[15px] font-normal no-underline transition-colors duration-200 hover:bg-white/30"
          >
            Back to website
            <span
              className="arrow-animate inline-block ml-1 transition-transform duration-200 font-bold"
              style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}
            >
              &#8594;
            </span>
          </a>
        </div>
        <style>{`
          .back-to-website-btn:hover .arrow-animate {
            transform: rotate(-60deg);
          }
        `}</style>
        <div className="relative z-20 flex flex-col items-center justify-end mb-8">
          <div className="text-white text-xl font-normal mb-3.5 text-center shadow-md min-h-[60px] max-w-[420px] px-4">
            {quotes[currentImg]}
          </div>
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            {images.map((img, idx) => (
              <span
                key={img}
                onClick={() => handleDotClick(idx)}
                className={`inline-block transition-all duration-300 cursor-pointer rounded-md ${idx === currentImg ? 'w-[18px] h-[6px] bg-white opacity-90 border border-violet-300' : 'w-2 h-[6px] bg-white opacity-50'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 h-[calc(100vh-48px)] m-6 bg-[#2d253a] rounded-xl shadow-xl p-8 flex flex-col justify-start items-stretch min-w-0">
        <div>
          <h1 className="text-white text-4xl mb-3">Create an account</h1>
          <div className="text-gray-400 text-lg mb-6">
            Already have an account? <a href="/login" className="text-violet-300">Log in</a>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off" className="w-full">
            <div className="flex gap-3.5 mb-4">
              <input
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="w-1/2 p-4 rounded-lg border-none bg-[#231d36] text-white text-lg font-poppins"
                required
              />
              <input
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="w-1/2 p-4 rounded-lg border-none bg-[#231d36] text-white text-lg font-poppins"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-none bg-[#231d36] text-white mb-4 text-lg font-poppins"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-none bg-[#231d36] text-white mb-4 text-lg font-poppins"
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-none bg-[#231d36] text-white mb-4 text-lg font-poppins"
              required
            />
            {passwordError && (
              <div className="text-red-400 mb-2 text-base font-poppins">{passwordError}</div>
            )}
            <div className="flex items-center mb-4">
              <input
                name="terms"
                type="checkbox"
                checked={form.terms}
                onChange={handleChange}
                className="mr-3 w-4 h-4"
                required
              />
              <span className="text-gray-400 text-base font-poppins">
                I agree to the <a href="#" className="text-violet-300">Terms & Conditions</a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full p-4 rounded-lg bg-violet-300 text-white font-semibold text-2xl mb-4 transition-colors duration-200 hover:bg-violet-400 font-poppins"
            >
              Create account
            </button>
          </form>
        </div>
        <div>
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-[#3a3350]" />
            <span className="text-gray-400 text-base mx-4 whitespace-nowrap font-poppins">Or register with</span>
            <div className="flex-1 h-px bg-[#3a3350]" />
          </div>
          <div className="flex gap-3.5 justify-center w-full">
            <button
              className={`flex-1 flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-lg border-2 border-black bg-[#2d253a] text-white font-medium cursor-pointer text-lg transition-colors duration-200 ${googleHover ? 'bg-violet-300 border-transparent' : ''} font-poppins`}
              onMouseEnter={() => setGoogleHover(true)}
              onMouseLeave={() => setGoogleHover(false)}
            >
              <img
                src={googleHover ? googleLogo1 : googleLogo}
                alt="Google"
                className="w-10 h-10 block mx-auto object-contain"
                style={googleHover ? { filter: 'brightness(0) invert(1)' } : {}}
              />
            </button>
            <button
              className={`flex-1 flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-lg border-2 border-black bg-[#2d253a] text-white font-medium cursor-pointer text-lg transition-colors duration-200 ${appleHover ? 'bg-violet-300 border-transparent' : ''} font-poppins`}
              onMouseEnter={() => setAppleHover(true)}
              onMouseLeave={() => setAppleHover(false)}
            >
              <img
                src={appleHover ? appleLogo1 : appleLogo}
                alt="Apple"
                className="w-10 h-10 block mx-auto object-contain"
                style={appleHover ? { filter: 'brightness(0) invert(1)' } : {}}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 