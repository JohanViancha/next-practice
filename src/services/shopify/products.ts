import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async () => {
  try {
    const response = await fetch(`${shopifyUrls.products.all}`, {
      headers: {
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      },
    });

    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
