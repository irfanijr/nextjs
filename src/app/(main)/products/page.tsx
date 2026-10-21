import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import DetailButton from "./components/DetailButton";
import ServerButton from "./components/ServerButton";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Gagal fetching data");
  }

  const products = await res.json();
  return products;
}

async function Page() {
  const { products } = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-semibold ">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex px-4 flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={product.thumbnail}
                fill
                alt="product thumbnail"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1.5 grow">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <div className="flex items-center gap-1.5">
                <p>${product.price}</p>
                <p className="text-orange-500 font-medium">
                  {product.discountPercentage}%
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <p>{product.rating}</p>
                </div>
                <p>|</p>
                <p>{product.stock} sold</p>
              </div>
              <DetailButton productId={product.id}>
                <ServerButton />
              </DetailButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
