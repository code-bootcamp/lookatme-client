import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;
  background-color: #000000;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
  height: 60px;

  @media ${breakPoints.tablet} {
    width: 800px;
    height: 60px;
  }

  @media ${breakPoints.mobile} {
    width: 600px;
    height: 60px;
  }
`;

export const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 450px;

  @media ${breakPoints.tablet} {
    width: 350px;
    height: 60px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 60px;
  }
`;

export const CategoryButton = styled.button`
  width: 70px;
  height: 60px;
  color: white;
  font-size: 30px;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 50px;
    height: 60px;
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 45px;
    height: 60px;
    font-size: 18px;
  }
`;

export const WriteButton = styled.button`
  width: 83px;
  height: 40px;
  background-color: #fff;
  border-radius: 40px;
  border: none;
  font-size: 14px;
`;
