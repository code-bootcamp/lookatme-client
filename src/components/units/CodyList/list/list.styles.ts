import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 80rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 2.75rem;
  color: #ffffff;

  @media ${breakPoints.tablet} {
    width: 60rem;
    padding: 2rem;
  }

  @media ${breakPoints.mobile} {
    width: 30rem;
    padding: 2rem;
  }
`;

export const Item1 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  background-image: url("/체형.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-shadow: 2px 2px black;
`;

export const Item2 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  background-image: url("/스타일.jpg");
  background-size: cover;
  background-position-y: -170px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-shadow: 2px 2px black;
`;

export const Item3 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/계절.jpg");
  background-size: cover;
  border: none;
  text-shadow: 2px 2px black;
`;

export const Item4 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/성별.jpg");
  background-size: cover;
  background-position-y: -170px;
  background-repeat: no-repeat;
  border: none;
  text-shadow: 2px 2px black;
`;

export const Item5 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/브랜드.jpg");
  background-position-x: -30px;
  background-size: cover;
  border: none;
  text-shadow: 2px 2px black;
`;

export const Item6 = styled.div`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  margin: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/가격.jpg");
  background-position-x: -110px;
  background-size: cover;
  border: none;
  text-shadow: 2px 2px black;
`;

export const ItemImg = styled.img``;
