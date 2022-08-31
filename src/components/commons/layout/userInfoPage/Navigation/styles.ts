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

export const PageTitle = styled.div`
  width: 200.74px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 180px;
    font-size: 25px;
  }

  @media ${breakPoints.mobile} {
    width: 150px;
    font-size: 20px;
  }
`;
