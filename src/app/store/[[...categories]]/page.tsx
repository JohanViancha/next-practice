import { ProductsWrapper } from "app/components/store/ProductWrapper";
import { getProducts } from "app/services/shopify";
import React from "react";

interface CategoryPros {
  params: {
    category: string[];
  };
}

const Category = async (props: CategoryPros) => {
  const { category } = props.params;
  const products = await getProducts()

  return (
    <ProductsWrapper products={products} />
  )
};

export default Category;
