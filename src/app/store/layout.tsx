import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const collections = await getCollections();

  console.log(collections);

  return (
    <main>
      <nav>
        {collections.map((collection: any) => (
          <Link key={collection.id} href={"store/" + collection.handle}>
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
};

export default Layout;
