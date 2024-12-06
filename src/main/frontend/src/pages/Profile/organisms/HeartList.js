import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const HeartList = ({}) => {
  const [product, setProduct] = useState([]);
  const email = useSelector((state) => state.user.user.id);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `/mypage/like-product?email=${email}&page=1&offset=10`
        );
        console.log(response.data.product);
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
      <A>관심 목록</A>
      {product.map((product) => (
        <Container key={product.product.product_seq}>
          <Content>
            <ProductInfo isTsitle>
              {product.product.title || "제목 없음"}
            </ProductInfo>
            <ProductInfo info>
              {product.product.address || "주소 정보 없음"}
            </ProductInfo>
            <ProductInfo price>
              {product.product.price
                ? `${product.product.price}원`
                : "가격정보 없음"}
            </ProductInfo>
            {/* 가격 정보가 없으므로 예시로 적음 */}
            <Btn
              onClick={() =>
                navigate(`/product/${product.product.product_seq}`)
              }
            >
              게시물 보러가기
            </Btn>
          </Content>
          <Image src={product.img} alt={product.title}></Image>
        </Container>
      ))}
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
      ${(props) =>
    props.place &&
    `
          font-size: 16px;
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

export default HeartList;
