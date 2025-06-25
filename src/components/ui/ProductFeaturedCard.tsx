import type { ProductFeatured } from "@/types";


interface ProductFeaturedCardProps {
    product: ProductFeatured;
}

export const ProductFeaturedCard = ({ product }: ProductFeaturedCardProps) => {
  return (
    <div className="max-w-[400px] w-full">
        <img src={`/images/${product.image}`} alt={product.alt} className="rounded-[40px]" />
        <p className="font-xl text-center mt-4">{product.name}</p>
    </div>
  )
}
