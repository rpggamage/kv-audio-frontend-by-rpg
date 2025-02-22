import { useState } from "react";
import "./login.css";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


return (
<div className="bg-picture w-full h-screen flex justify-center items-center">
    <div className="backdrop-blur-xl w-[400px] h-[400px] rounded-xl flex justify-center items-center flex-col">
<img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
<input type="text" placeholder="Email" className="w-[300px] h-[50px] rounded-lg mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" placeholder="Password" className="w-[300px] h-[50px] rounded-lg mb-2 mt-6" value={password} onChange={(e) => setPassword(e.target.value)} />


<button className="my-8 w-[300px] h-[50px] rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-bold">Login</button>
    </div>

</div>

)


}