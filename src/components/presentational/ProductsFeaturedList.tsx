import {
  ProductFeaturedCard,
  type ProductFeatured,
} from "./ProductFeaturedCard";

interface ProductsFeaturedListProps {
  products: ProductFeatured[];
}

export const ProductsFeaturedList = ({
  products,
}: ProductsFeaturedListProps) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, index) => (
          <ProductFeaturedCard key={index} product={product} />
        ))}
      </div>
      <a href="#" className="btn-large mx-auto mt-13">See More</a>
    </div>
  );
};
