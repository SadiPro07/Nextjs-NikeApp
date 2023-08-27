// pages/products/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "../../dummy/products";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCarousel from "../../components/ProductDetailCarousal";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "../../components/ReleatedProduct";
import { useCart } from "../../contexts/CardContext";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductDetailPage: React.FC = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // Fetch the product details using the ID from an API or your data source
    // For simplicity, we'll use dummy data
    const selectedProduct = products.find((p) => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper className={""}>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">Men's Golf Shoes</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : ${product.price}
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-12">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black hover:bg-gray-100 cursor-pointer">
                  22
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black hover:bg-gray-100 cursor-pointer">
                  30
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black hover:bg-gray-100 cursor-pointer">
                  35
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black hover:bg-gray-100 cursor-pointer">
                  22
                </div>
                <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] ">
                  30
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black hover:bg-gray-100 cursor-pointer">
                  35
                </div>
              </div>
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">{product.description}</div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetailPage;
