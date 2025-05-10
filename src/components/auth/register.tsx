import { useState } from "react";
import login from "../../assets/login.jpg";

const RegisterSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registering user", form);
    // Add register logic here
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src={login}
          alt="Register"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">Create Account</h1>
          <p className="text-center text-gray-500">Join FORSA to continue</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
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
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="underline text-black">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
