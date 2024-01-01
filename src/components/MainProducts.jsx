import React, { useState } from "react";
import Products from "./Products";
import "./MainProducts.css";
import { useQueryClient } from "@tanstack/react-query";

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();
  return (
    <>
      <main className="container">
        <div>
          {showLeftProducts && <Products />}
          <button onClick={() => setShowLeftProducts((show) => !show)}>
            Toggle
          </button>
        </div>
        <div>
          {showRightProducts && <Products />}
          <button onClick={() => setShowRightProducts((show) => !show)}>
            Toggle
          </button>
        </div>
      </main>
      <button
        onClick={() => {
          // client.invalidateQueries를 사용하면 배열 속의 키를 가지고 있는 데이터가 업데이트 됨
          client.invalidateQueries({ queryKey: ["products", false] });
        }}
      >
        정보가 업데이트 됨!
      </button>
    </>
  );
}
