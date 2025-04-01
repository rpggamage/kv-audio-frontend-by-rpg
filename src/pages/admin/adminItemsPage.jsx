import { useEffect, useState } from "react";
import sampleArr from "../../components/sampleItemsArray";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminItemsPage() {
  const [items, setItems] = useState(sampleArr);
  const [itemLoaded, setItemLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemLoaded) {
      const token = localStorage.getItem("user");
      axios
        .get("http://localhost:3000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setItems(res.data);
          setItemLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [itemLoaded]);

  const handleDelete = (key) => {
    const token = localStorage.getItem("user");

    axios
      .delete(`http://localhost:3000/api/products/${key}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setItems(items.filter((item) => item.key !== key));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 relative flex items-center flex-col">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Items
      </h1> */}
      {!itemLoaded && (
        <div className="border-4  border-gray-500 my-4 border-b-green-500 w-[100px] h-[100px]  bg-0 rounded-full animate-spin"></div>
      )}
      {itemLoaded && (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-4 py-2">Key</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Dimension</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item.key}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="px-4 py-2">{item.key}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 font-semibold text-green-700">
                    ${item.price}
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.dimension}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-medium ${
                        item.availability ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {item.availability ? "Available" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => {
                        navigate(`/admin/items/edit`, { state: item });
                      }}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.key)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[80px] fixed bottom-6 right-6 text-blue-700 hover:text-blue-900 transition-all duration-300 cursor-pointer shadow-lg rounded-full bg-white p-2" />
      </Link>
    </div>
  );
}
