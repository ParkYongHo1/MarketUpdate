import MainBody from "../atoms/MainBody";
import Container from "../atoms/Container";
import MainSwiper from "../organisms/MainSwiper";
import Div from "../atoms/Div";
import CategoryGroup from "../organisms/CategoryGroup";
import MainDivTitle from "../atoms/MainDivTitle";
import MainDivContent from "../atoms/MainDivContent";
import MainDivContentBox from "../atoms/MainDivContentBox";
import MainContentImg from "../atoms/MainContentImg";
import MainContentTitle from "../atoms/MainContentTitle";
import MainContentFont from "../atoms/MainContentFont";
import StyledLink from "../atoms/StyledLink";
import Banner from "../templates/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import useTimeAgo from "../../../hooks/useTimeAgo";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/product/select");
        console.log(response);
        if (response.status == 200) {
          setProducts(response.data);
        }
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  console.log(products[0]?.location.jibun_address);

  return (
    <MainBody>
      <MainSwiper />

      <Container>
        <Div>
          <Div title>
            <MainDivTitle></MainDivTitle>
          </Div>
          <CategoryGroup />
        </Div>
        <Banner />
        <Div title>
          <MainDivTitle>방금 등록된 상품</MainDivTitle>
          <StyledLink moreButton to="/latest">
            더보기
          </StyledLink>
        </Div>

        <MainDivContent>
          {products.map((product) => {
            console.log(`C:/market/images/${product.product_image[0]}`);
            console.log(
              `http://localhost:8090/market/images/${product.product_image[0]}`
            );
            return (
              <MainDivContentBox
                key={product.product_seq}
                to={`/product/${product.product_seq}`}
              >
                <MainContentImg>
                  <img
                    style={{ borderRadius: "10px", width: "100%" }}
                    src={`file://C:/market/images/${product.product_image[0]}`}
                    alt={product.title}
                  />
                </MainContentImg>
                <MainContentTitle>{product.title}</MainContentTitle>
                <MainContentFont>
                  {product.category.join(", ")}
                </MainContentFont>{" "}
                <MainContentFont>
                  {product.location.jibun_address}
                </MainContentFont>
                <MainContentTitle>
                  {product.price.toLocaleString()}원
                </MainContentTitle>{" "}
                <MainContentFont></MainContentFont>
              </MainDivContentBox>
            );
          })}
        </MainDivContent>
      </Container>
    </MainBody>
  );
};

export default Main;
