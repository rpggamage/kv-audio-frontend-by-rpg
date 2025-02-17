
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center gap-4 relative">
            <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] border-2 object-cover absolute left-1 rounded-full" />  

            <Link to="/" className="text-[25px] font-bold m-10">Home</Link> 
            <Link to="/contact" className="text-[25px] font-bold m-10">Contact</Link> 
            <Link to="/gallery" className="text-[25px] font-bold m-10">Gallery</Link> 
            <Link to="/items" className="text-[25px] font-bold m-10">Items</Link> 
        </header>
    );
}
