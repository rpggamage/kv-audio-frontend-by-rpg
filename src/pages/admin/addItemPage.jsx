import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimension, setProductDimension] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState([]);

  const navigate = useNavigate();

  async function handleAddItem() {
    //console.log(productImage);
    const promises = [];
    for (let i = 0; i < productImage.length; i++) {
      console.log(productImage[i]);
      const promise = mediaUpload(productImage[i]);
      promises.push(promise);
      if (i == 5) {
        toast.error("You can only upload 5 images per product");
        break;
      }
    }
    // Promise.all(promises)
    //   .then((values) => {
    //     console.log(values);
    //   })
    //   .catch((err) => toast.error(err));

    console.log(
      productKey,
      productName,
      productPrice,
      productCategory,
      productDimension,
      productDescription
    );
    const token = localStorage.getItem("user");

    if (token) {
      try {
        // Promise.all(promises)
        //   .then((values) => {
        //     console.log(values);
        //   })
        //   .catch((err) => toast.error(err));
        const imageUrls = await Promise.all(promises);

        const result = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/products`,
          {
            key: productKey,
            name: productName,
            price: productPrice,
            category: productCategory,
            dimension: productDimension,
            description: productDescription,
            Image: imageUrls,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        //console.log(result);
        toast.success(result.data.message);
        navigate("/admin/items");
      } catch (err) {
        toast.error(err.response.data.message);
      }
    } else {
      toast.error("you are not authorized to add items");
    }
  }
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
          type="number"
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
        <textarea
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-1 w-full"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setProductImage(e.target.files)}
          className="border p-1 w-full"
        />

        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add
        </button>
        <button
          onClick={() => navigate("/admin/items")}
          className="bg-red-500 text-white p-2 rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
