import React from "react";
import { Product } from "../pages/interfaces";
import ProductItem from "./ProductItem";

interface Props {
  featuredProductsData: Product[];
}

const RelatedProducts: React.FC<Props> = ({ featuredProductsData }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {featuredProductsData.map((product, index) => (
              <ProductItem key={`product-${index}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
