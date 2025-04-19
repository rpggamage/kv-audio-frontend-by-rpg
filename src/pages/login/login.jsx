import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(`${backendUrl}/api/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        toast.success("Login successful");
        const user = res.data.user;

        // localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem("token", res.data.token);

        if (user.role === "admin") {
          navigate("/admin/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }

  return (
    <div className="bg-picture w-full h-screen flex justify-center items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="backdrop-blur-xl w-[400px] h-[400px] rounded-xl flex justify-center items-center flex-col">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[100px] object-cover"
          />

          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[30px]
        mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="my-8 w-[300px] h-[50px] rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
