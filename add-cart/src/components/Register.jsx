import { useState } from "react";
import axios from "axios";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // page reload stop

    try {
      const res = await axios.post("http://localhost:3000/auth/signup", {
        fullname,
        email,
        password,
      });

      console.log(res.data);
      setMessage(res.data); // backend string bhej raha hai
    } catch (error) {
      console.log(error);
      setMessage("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Enter full name"
          className="w-full border p-2 rounded mb-3"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-blue-600 mt-3">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Register;
