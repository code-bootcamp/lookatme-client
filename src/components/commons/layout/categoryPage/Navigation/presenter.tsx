import { useRouter } from "next/router";
import * as S from "./styles";

const BODY_SHAPE = ["/codyList/category/bodyShape/"];
const STYLE = ["/codyList/category/style/"];
const SEASON = ["/codyList/category/season/"];
const GENDER = ["/codyList/category/gender/"];
const BRAND = ["/codyList/category/brand/"];
const PRICE = ["/codyList/category/price/"];

export default function CategoryPageNavigationPresenter() {
  const router = useRouter();

  const bodyShapePage = BODY_SHAPE.includes(router.asPath);
  const stylePage = STYLE.includes(router.asPath);
  const seasonPage = SEASON.includes(router.asPath);
  const genderPage = GENDER.includes(router.asPath);
  const brandPage = BRAND.includes(router.asPath);
  const pricePage = PRICE.includes(router.asPath);

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.CategoryButtonWrapper>
          <S.CategoryButton>
            {bodyShapePage && "150cm~"}
            {stylePage && "이지캐주얼"}
            {seasonPage && "봄"}
            {genderPage && "남자"}
            {brandPage && "브랜드"}
            {pricePage && "~1만원"}
          </S.CategoryButton>
          <S.CategoryButton>
            {bodyShapePage && "160cm~"}
            {stylePage && "비즈니스캐주얼"}
            {seasonPage && "여름"}
            {genderPage && "여자"}
            {brandPage && "보세"}
            {pricePage && "~10만원"}
          </S.CategoryButton>
          <S.CategoryButton>
            {bodyShapePage && "170cm~"}
            {stylePage && "스트릿"}
            {seasonPage && "가을"}
            {pricePage && "~100만원"}
          </S.CategoryButton>
          <S.CategoryButton>
            {bodyShapePage && "180cm~"}
            {stylePage && "시티보이"}
            {seasonPage && "겨울"}
            {pricePage && "101만원~"}
          </S.CategoryButton>
          <S.CategoryButton>
            {bodyShapePage && "190cm~"}
            {stylePage && "아메카지"}
          </S.CategoryButton>
          <S.CategoryButton>
            {bodyShapePage && "200cm~"}
            {stylePage && "스포티"}
          </S.CategoryButton>
        </S.CategoryButtonWrapper>
        <S.WriteButton>피드등록</S.WriteButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
