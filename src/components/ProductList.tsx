import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Skeleton } from "./ui/skeleton";

export type IProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products?limit=8");
        if (!res.ok) {
          throw new Error("Somthing went wrong");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-24">
      <div className="px-6 container lg:px-0">
        <h1 className="text-4xl pb-8 font-playfair-display text-[#ad9271]">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 4 })
                .fill("")
                .map((_, i) => (
                  <div className="flex flex-col space-y-3" key={i}>
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ))
            : products?.map((product) => (
                <ListItem
                  key={product.id}
                  thumbnileURL={product.image}
                  {...product}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
