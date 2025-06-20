import { productsFeatured } from "../../data/data";
import { ProductsFeaturedList } from "../presentational/ProductsFeaturedList";

export const OurWorkSection = () => {
  return (
    <section className="py-32">
      <div className="container-lg">
        <h2 className="heading-2 text-center mb-3">Our Work</h2>
        <p className="text-center font-md mb-13">A glimpse of our portfolio</p>
        <ProductsFeaturedList products={productsFeatured} />
      </div>
    </section>
  );
};
