import sampleArr from "../../components/sampleItemsArray";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemsPage() {
  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Items
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Key</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Dimension</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {sampleArr.map((item, index) => (
              <tr
                key={item.key}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="px-4 py-2 text-center">{item.key}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 text-center font-semibold text-green-700">
                  ${item.price}
                </td>
                <td className="px-4 py-2 text-center">{item.category}</td>
                <td className="px-4 py-2 text-center">{item.dimension}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white font-medium ${
                      item.availability ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.availability ? "Available" : "Out of Stock"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[80px] fixed bottom-6 right-6 text-blue-700 hover:text-blue-900 transition-all duration-300 cursor-pointer shadow-lg rounded-full bg-white p-2" />
      </Link>
    </div>
  );
}
