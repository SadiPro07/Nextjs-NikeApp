import Wrapper from "../components/Wrapper";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import { products } from "../dummy/products";
import Categories from "../components/Categories";
// pages/index.tsx

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroBanner />
      <Wrapper className={""}>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight hidden md:block">
            Various Categories
          </div>
        </div>
        {/* heading and paragaph end */}

        <div className="hidden md:block">
          <Categories />
        </div>

        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}

        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
};

export default HomePage;
