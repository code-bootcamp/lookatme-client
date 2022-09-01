import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 300px;
  background-color: black;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 70%;
  height: 100px;

  @media ${breakPoints.mobile} {
    width: 95%;
  }
`;

export const TopButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1.3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 70%;

  @media ${breakPoints.mobile} {
    width: 95%;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 2px solid #bdbdbd;
  padding: 10px;

  width: 50%;
`;

export const FooterTitle = styled.div`
  font-size: 1.2rem;
  color: #bdbdbd;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const FooterContents = styled.div`
  font-size: 1rem;
  color: #bdbdbd;
  margin-bottom: 5px;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  width: 50%;
`;
