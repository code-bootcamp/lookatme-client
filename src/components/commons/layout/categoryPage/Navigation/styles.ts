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

  width: 80vw;
  height: 60px;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    width: 100vw;
  }
`;

export const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;
`;

export const CategoryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  height: 60px;
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 34px;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WriteButton = styled.button`
  width: 4.6875rem;
  height: 40px;
  background-color: #fff;
  border-radius: 40px;
  border: none;
  font-size: 0.85rem;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 0.7rem;
  }

  @media ${breakPoints.mobile} {
    width: 4rem;
    margin-right: 5px;
    font-size: 0.5rem;
  }
`;
