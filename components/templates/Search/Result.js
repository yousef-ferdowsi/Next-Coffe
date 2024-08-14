import Card from "@/components/modules/Card/Card";
import React from "react";
//import './styles.css'; // Adjust the path as necessary

function Result({ searchResult }) {
  const hotCoffee = searchResult.filter((item) => item.type === "hot").slice(0, 3);
  const coldCoffee = searchResult.filter((item) => item.type === "cold").slice(0, 3);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {hotCoffee.length > 0 ? (
              hotCoffee.map((item) => (
                <Card {...item} key={item.id} />
              ))
            ) : (
              <p className="no-products-message">محصولی یافت نشد</p> 
            )}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {coldCoffee.length > 0 ? (
              coldCoffee.map((item) => (
                <Card {...item} key={item.id} />
              ))
            ) : (
              <p className="no-products-message">محصولی یافت نشد</p> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;