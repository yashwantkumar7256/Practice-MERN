import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // page reload hone se roke

    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      console.log(res.data);
      setMessage(res.data.message); // success message
    } catch (error) {
      console.log(error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-green-600 mt-3">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Login;
