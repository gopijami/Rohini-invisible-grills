import { services } from "../data/productServices";
import { ProductCard } from "./ProductCards";

 const ServicesGrid = () => {
  return (
    <div className="mt-6 mx-auto bg-[#E5E5E5] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-green-900">
            Our Premium Products & Services
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service,index) => (
          <ProductCard key={service.slug+index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;