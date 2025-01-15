// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [userInput, setUserInput] = useState();

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const input = type === "checkbox" ? checked : value;
    setUserInput({ ...userInput, [name]: input });
    setProducts(
      jsonData.filter(
        (item) =>
          item.inStock === userInput.inStock &&
          item.name.toLowerCase().includes(userInput.name.toLowerCase())
      )
    );
  };

  return (
    <div className="mx-5">
      <h1>IronStore</h1>
      <SearchBar handleChange={handleChange} />
      <ProductTable data={products} />
    </div>
  );
}

export default ProductsPage;
