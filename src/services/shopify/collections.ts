import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getCollections = async () => {
  try {
    const response = await fetch(`${shopifyUrls.collections.all}`, {
      headers: {
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      },
    });

    const { smart_collections } = await response.json();

    const transformedCollection = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });
    return transformedCollection;
  } catch (error) {
    console.log(error);
  }
};
