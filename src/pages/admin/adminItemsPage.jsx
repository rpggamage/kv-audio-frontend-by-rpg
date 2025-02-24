import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";



export default function AdminItemsPage() {
    return (
        <div className="w-full h-full">
            <h1>Admin Items</h1>

            <Link to="/admin/items/add"> 
            <CiCirclePlus className="text-[100px] absolute bottom-2 right-2 hover:text-red-900 cursor-pointer" />
             </Link>




   





        </div>
    );
}