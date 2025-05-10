import { useState } from "react";
import login from "../../assets/login.jpg";

const ForgotPasswordSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email");

    console.log("Sending OTP to", email);
    // Insert actual OTP send logic here (e.g., backend API call)
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src={login}
          alt="Forgot Password"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">Forgot Password</h1>
          <p className="text-center text-gray-500">Enter your email to receive a reset code</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Send OTP
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Remembered? <a href="/login" className="underline text-black">Back to Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSection;
