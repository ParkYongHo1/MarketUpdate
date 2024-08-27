// import styled from "@emotion/styled";
// const ReviewList = () => {
//   return (
//       <Container>
//         <Content>
//           <ProductInfo title>아이다스 슈퍼스타 브라운</ProductInfo>
//           <ProductInfo rv_info>너무 싼 가격에 잘샀어요. 감사합니다.</ProductInfo>
//             <input type="radio" className="star" value="1" />
//             <input type="radio" className="star" value="2" />
//             <input type="radio" className="star" value="3" />
//             <input type="radio" className="star" value="4" />
//             <input type="radio" className="star" value="5" />
//           <Btn>제품 보러가기</Btn>
//         </Content>
//         <Image src={process.env.PUBLIC_URL + 'WriteListImg.jpg'} alt='ListImg'></Image>
//     </Container>
//   );
// };
// const Container = styled.div`
//   display: flex;
//   position: relative;
//   align-items: center;
//   box-shadow: 0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0, 0, 0, 0.04);
//   width: 80%;
//   height: 180px;
//   margin: 16px 10% 0 10%;
//   padding: 10px 20px;
//   border-radius: 32px;
//   box-shadow: 1px 3px 10px gray;
// `;
// const Content = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
// const ProductInfo = styled.div`
//   padding-left: 40px;
//   margin: 3.5px;
//   font-size: 10px;
//   text-align: start;  
//   ${(props) =>
//     props.title &&
//     `
//       font-size:16px;
//     `}
//   ${(props) =>
//     props.rv_info &&
//     `
//         font-size:14px;
//         color: gray;
//       `}
//   ${(props) =>
//     props.rating &&
//     `
//       font-size:16px;
//       font-weight: bold;
//       `}
// `;
// const StarRating = styled.div`
//   display: flex;

//   .star {
//     appearance: none;
//     background: none;
//     padding: 1px;
//   }

//   .star::after {
//     content: '☆';
//     font-size: 20px;
//     color: hsl(60, 80%, 45%);
//   }

//   .star:checked::after {
//     content: '★';
//     color: gold;
//   }
// `;
// const Btn = styled.button`
//   width: 124px;
//   height: 40px;
//   margin: 5px 0 0 40px;
//   text-align: center;
//   font-size: 16px;
//   line-height: 30px;
//   border-radius: 32px;
//   cursor: pointer;
// `;
// const Image = styled.img`
//   width: 128px;
//   height: 128px;
//   object-fit: cover;
// `;
// export default ReviewList;
import styled from "@emotion/styled";
import React from "react";

const ReviewList = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<Star key={i} filled="full" />);
      } else if (rating >= i - 0.5) {
        stars.push(<Star key={i} filled="half" />);
      } else {
        stars.push(<Star key={i} filled="empty" />);
      }
    }
    return stars;
  };

  return (
    <>
      <Container>
        <Content>
          <ProductInfo title>아디다스 슈퍼스타 브라운</ProductInfo>
          <ProductInfo rv_info>너무 싼 가격에 잘 샀어요. 감사합니다.</ProductInfo>
          <StarRating>{renderStars()}</StarRating>
          <Btn>제품 보러가기</Btn>
        </Content>
        <Image src={process.env.PUBLIC_URL + "WriteListImg.jpg"} alt="ListImg" />
      </Container>
      </>
  );
};

const Star = styled.span`
  font-size: 30px;
  color: ${(props) =>
    props.filled === "full" ? "gold" : props.filled === "half" ? "gold" : "#ddd"};
  &::before {
    content: ${(props) =>
      props.filled === "full" ? "'★'" : props.filled === "half" ? "'☆'" : "'☆'"};
    position: relative;
  }
  ${(props) =>
    props.filled === "half" &&
    `
    &::before {
      content: '★';
      width: 10px;
      height: 20px;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
    }
  `}
`;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  width: 80%;
  height: 180px;
  margin: 16px 10% 0 10%;
  padding: 10px 20px;
  border-radius: 32px;
  box-shadow: 1px 3px 10px gray;
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
    props.title &&
    `
      font-size:16px;
    `}

  ${(props) =>
    props.rv_info &&
    `
      font-size:14px;
      color: gray;
    `}
`;

const StarRating = styled.div`
  display: flex;
`;

const Btn = styled.button`
  width: 124px;
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

export default ReviewList;
