import { useState } from "react";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimension, setProductDimension] = useState("");
  const [productDescription, setProductDescription] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <h1>Add Items</h1>

      <div className="w-[400px] border flex flex-col items-center gap-2 p-4">
        <input
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="border p-1 w-full"
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-1 w-full"
        />
        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="border p-1 w-full"
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-1 w-full"
        >
          <option value="audio">Audio</option>
          <option value="light">Light</option>
        </select>
        <input
          type="text"
          placeholder="Product Dimension"
          value={productDimension}
          onChange={(e) => setProductDimension(e.target.value)}
          className="border p-1 w-full"
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-1 w-full"
        />
        <button className="bg-blue-500 text-white p-2 rounded">Add</button>
      </div>
    </div>
  );
}
