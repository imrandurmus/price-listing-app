import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 max-h-[500px] overflow-hidden border-4 border-red-500">
      <Swiper
        className="h-full"
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={4}
        navigation
        grabCursor
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '16rem', margin: '0 auto' }}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
