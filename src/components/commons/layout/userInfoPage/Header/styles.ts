import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  background-color: #fff;
`;

export const Logo = styled.img`
  width: 200.74px;
  height: 60px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 180px;
    height: 50px;
  }

  @media ${breakPoints.mobile} {
    width: 150px;
    height: 45px;
  }
`;
