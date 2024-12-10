import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Paging from "../../../components/Paging";
import axios from "axios";
import { useSelector } from "react-redux";

const WriteList = ({}) => {
  const email = useSelector((state) => state.user.user.id);
  const navigate = useNavigate(); // navigate 초기화
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `/mypage/my-product?email=${email}&page=1&offset=10`
        );
        console.log(response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  console.log(product);

  return (
    <>
      <A>받은 거래 후기</A>
      {product.map((product) => {
        return (
          <Container key={product.product.product_seq}>
            <Content>
              <ProductInfo isTitle>
                {product?.product?.title || "제목 없음"}
              </ProductInfo>
              <ProductInfo info>
                {product.product.location?.address || "주소 정보 없음"}
              </ProductInfo>
              <ProductInfo price>
                {product.product.price
                  ? `${product.product.price}원`
                  : "가격 정보 없음"}
              </ProductInfo>
              <Btn
                onClick={() =>
                  navigate(`/product/${product.product.product_seq}`)
                }
              >
                게시물 보러가기
              </Btn>
            </Content>
            <Image
              src={
                product.product_image?.[0]
                  ? `${process.env.PUBLIC_URL}/${product.product.product_image[0]}`
                  : `${process.env.PUBLIC_URL}/placeholder.png`
              }
            ></Image>
          </Container>
        );
      })}
    </>
  );
};

const A = styled.div`
  font-size: 36px;
  text-align: left;
  margin: 10px 0 0 10px;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 80%;
  height: 180px;
  margin: 16px 10% 0 10%;
  padding: 10px 20px;
  border-radius: 32px;
  box-shadow: 1px 3px 10px #adb5bd;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductInfo = styled.div`
  padding-left: 40px;
  margin: 3.5px;
  font-size: 10px;
  text-align: start;
  ${(props) =>
    props.isTitle &&
    `
      font-size:16px;
    `}
  ${(props) =>
    props.info &&
    `
        font-size:14px;
        color: gray;
      `}
  ${(props) =>
    props.price &&
    `
      font-size:16px;
      font-weight: bold;
      `}
`;
const Btn = styled.button`
  width: 144px;
  height: 40px;
  margin: 5px 0 0 40px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  border-radius: 32px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
`;
const Pagination = styled.div`
  width: 450px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  border-radius: 32px;
  box-shadow: 0px 2px 10px #adb5bd;
`;

const PageNumber = styled.div`
  margin: 0 5px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${(props) => (props.isActive ? "#adb5bd" : "transparent")};
  border-radius: 5px;
  &:hover {
    background-color: #e9ecef;
  }
`;

export default WriteList;
