import { ProductsWrapper } from "app/components/store/ProductWrapper";
import { getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
import React from "react";

interface CategoryPros {
  params: {
    category: string[];
  };
}

const Category = async (props: CategoryPros) => {
  const { category } = props.params;
  const products = await getProducts();

  return <ProductsWrapper products={products} />;
};

export default Category;
