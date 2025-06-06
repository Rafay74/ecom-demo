import { useState } from "react";
import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";


const LoginSection = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", form);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src={login}
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

  
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome Back</h1>
          <p className="text-center text-gray-500">Login to your FORSA account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Login
            </button>
            <Link to="/forget-password">
            <span className="hover:underline cursor-pointer">Forget your password?</span>
            </Link>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account? <a href="/register" className="underline text-black">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
