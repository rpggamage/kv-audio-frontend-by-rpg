// export default function ProductCard(props) {
//   const item = props.item;
//   return <h1>{item.name}</h1>;
// }
export default function ProductCard({ item }) {
  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.Image[0]}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-500 mb-2">Key: {item.key}</p>
        <p className="text-gray-700 text-sm mb-3">{item.description}</p>

        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-600">
            <strong>Category:</strong> {item.category}
          </span>
          <span className="text-gray-600">
            <strong>Size:</strong> {item.dimension}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">
            ${item.price}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              item.availability
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {item.availability ? "Available" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
