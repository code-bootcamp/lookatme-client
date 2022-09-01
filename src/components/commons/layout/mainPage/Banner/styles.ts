import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.img`
  width: 100%;
  height: 800px;

  @media ${breakPoints.tablet} {
    width: 75rem;
    height: 500px;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    height: 300px;
  }
`;
