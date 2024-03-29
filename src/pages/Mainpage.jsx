import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Mainpage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Birden çok ürünü çekmek için doğru uç noktayı kullanın
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="my-5  container d-flex  flex-wrap justify-content-center justify-content-md-between gap-5">
      {products.length > 0 ? (
        products.map((item) => <Card key={item.id} {...item} item={item} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Mainpage;
