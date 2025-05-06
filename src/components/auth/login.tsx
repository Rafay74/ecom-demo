import { useState } from "react";

const LoginSection = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", form);
    // Add your login logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/bg-login.jpg')` }} />
      <div className="z-10 bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-serif font-bold text-center mb-8">FORSA Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
