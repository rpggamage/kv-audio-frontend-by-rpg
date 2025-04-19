import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/ProductCard";

export default function Items() {
  const [state, setState] = useState("loading"); // loading, success, error
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (state === "loading") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res) => {
          console.log(res);
          setItems(res.data);
          setState("success");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message || "Something went wrong");
          setState("error");
        });
    }
  }, []);
  return (
    <div className="w-full h-full flex flex-wrap justify-center pt-[50px]">
      {state == "loading" && (
        <div className="w-full h-full  flex justify-center items-center">
          <div className="w-[50px] h-[50px] border-4 rounded-full animate-spin"></div>
        </div>
      )}

      {state == "success" &&
        items.map((item) => {
          return <ProductCard key={item.key} item={item} />;
        })}
    </div>
  );
}
