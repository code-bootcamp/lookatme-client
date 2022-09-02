import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100px;
  background-color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 80vw;
  height: 100px;

  @media ${breakPoints.mobile} {
    width: 95vw;
  }
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

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 60px;

  @media ${breakPoints.tablet} {
    width: 25rem;
  }

  @media ${breakPoints.mobile} {
    width: 12.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 21.875rem;
  height: 40px;

  border: none;
  border-bottom: 1px solid black;
  background-image: url(/searchIcon.jpg);
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 50px;
  font-size: 15px;

  @media ${breakPoints.tablet} {
    width: 12.5rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LogInButton = styled.button`
  width: 3.5rem;
  height: 17px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  width: 5rem;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
`;
