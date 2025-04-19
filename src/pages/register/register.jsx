import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(`${backendUrl}/api/users`, {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
      })
      .then((res) => {
        console.log(res);
        toast.success("Registration successful");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div className="bg-picture w-full h-screen flex justify-center items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="backdrop-blur-xl w-[400px] max-h-[90vh] overflow-y-auto rounded-xl flex justify-center items-center flex-col p-6 space-y-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[100px] object-cover"
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
