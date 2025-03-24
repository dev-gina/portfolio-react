import React from "react";
import S from "../about/style";

const AboutContainer = () => {
  return (
    <S.Container>
      {/* 좌측 이미지 섹션 */}
      <S.ImageSection>
        <S.ImageGrid>
          <S.MainImage src="/assets/main1.png" alt="main" />
          <S.SmallImage src="/assets/main2.png" alt="main" />
          <S.SmallImage src="/assets/main3.png" alt="main" />
        </S.ImageGrid>
      </S.ImageSection>

      {/* 우측 텍스트 섹션 */}
      <S.TextSection>
       <h2>About Gina</h2>
       <h3>Career</h3>
       <p>7 Years of Experience in Non-Development Roles</p>
       <p>Korea IT Academy (Jul 2024 ~ Dec 2024)</p>
       <p>Infinity Exchange Korea (Aug 2023 ~ Jul 2024) Brand Marketer</p>
       <p>Fair Value (Jun 2021 ~ Aug 2023) Brand Marketer</p>
       <p>TMCK (Mar 2019 ~ Jun 2021) Account Executive</p>
       <p>Insight Planet (Mar 2017 ~ Sep 2018) Account Executive</p>
    </S.TextSection>
    </S.Container>
  );
};

export default AboutContainer;
