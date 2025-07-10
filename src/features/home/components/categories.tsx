import { Button } from "@/components/ui/button";
import useCategories from "@/features/job-categories/hooks/use-categories";
import React from "react";

function Categories() {
  const { categories } = useCategories();
  return (
    <div className="flex gap-2 flex-wrap content-center items-center">
      {categories.map((category) => {
        return <Button size="sm" variant="secondary" key={category.id}>{category.name}</Button>;
      })}
    </div>
  );
}

export default Categories;
