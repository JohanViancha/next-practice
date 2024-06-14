import React from 'react';

interface CategoryPros {
  params: {
    category: string[];
  };
}

const Category = (props: CategoryPros) => {
  const { category } = props.params;

  console.log(category);
  return <h1>{category}</h1>;
};

export default Category;
