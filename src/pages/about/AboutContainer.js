import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer"; 
import S from "../about/style"; 

const AboutContainer = () => {
  const timelineData = [
    {
      date: "2024.07 - 2024.12",
      title: "코리아IT 아카데미",
      description:
        "디지털컨버전스공공데이터활용 Spring 웹개발자 양성과정 수료 및 펫스널컬러기반 맞춤형 펫테크 서비스 WEB / APP 플랫폼 개발",
      techStack: "Spring, Java, MySQL, HTML/CSS, JavaScript",
    },
    {
      date: "2023.08 - 2024.07",
      title: "인피니티익스체인지코리아",
      description:
        "가상자산 거래소 브랜드 마케터. 웹사이트 최적화 및 사용성 향상을 위한 기술적 분석 참여",
      techStack: "Figma, Notion, Jira, Google Analytics",
    },
    {
      date: "2021.06 - 2023.08",
      title: "공정한가치",
      description:
        "가상자산 거래소 브랜드 마케터. 디지털 마케팅 전략 수립 및 실행",
      techStack: "WordPress, Google Analytics",
    },
    {
      date: "2019.03 - 2021.06",
      title: "티엠씨케이",
      description: "마케팅 기획 AE. 프로젝트 관리 및 광고 캠페인 전략 수립",
      techStack: "N/A",
    },
    {
      date: "2017.03 - 2018.09",
      title: "인사이트플랫닛",
      description: "마케팅 기획 AE. 고객 니즈 분석 및 캠페인 기획",
      techStack: "N/A",
    },
  ];

  return (
    <div>
      {/* 타임라인 영역 */}
      <S.AboutWrap>
        <h1>기획의 시선, 개발의 손끝으로</h1>
        <S.TimelineContainer>
          {timelineData.map((item, index) => (
            <S.TimelineItem key={index}>
              <S.TimelineDate>{item.date}</S.TimelineDate>
              <S.TimelineContent>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>기술 스택: {item.techStack}</span>
              </S.TimelineContent>
            </S.TimelineItem>
          ))}
        </S.TimelineContainer>
      </S.AboutWrap>

      {/* Outlet 컴포넌트 */}
      <Outlet />

      {/* Footer 추가 */}
      <Footer />
    </div>
  );
};

export default AboutContainer;
