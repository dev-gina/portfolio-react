import React, { useState } from "react";
import S from './style';
import Footer from "../layout/Footer";

const categories = ["All", "Tech Study", "Projects", "Algorithms", "Interview Prep"];

const studyItems = [
  { title: "JavaScript Deep Dive", description: "JavaScript의 고급 기능을\n이해하고 활용하기", link: "#", type: "Tech Study" },
  { title: "React Hooks", description: "React에서 Hooks를 활용한\n상태 관리 및 사이드 이펙트 처리", link: "#", type: "Tech Study" },
  { title: "Node.js REST API Design", description: "Node.js를 이용한\nRESTful API 설계 및 구현", link: "#", type: "Tech Study" },
  { title: "Graph Algorithms", description: "그래프 알고리즘\n및 최단 경로 문제 해결", link: "#", type: "Algorithms" },
  { title: "Dynamic Programming", description: "동적 계획법을 이용한\n알고리즘 최적화 기법", link: "#", type: "Algorithms" },
  { title: "System Interviews", description: "시스템 설계 면접 문제와\n그 해결 방안", link: "#", type: "Interview Prep" },
  { title: "Behavioral Interviews", description: "행동 면접 질문과\n답변 준비 전략", link: "#", type: "Interview Prep" },
  { title: "Portfolio Website", description: "자신만의 포트폴리오\n웹사이트 개발 프로젝트", link: "#", type: "Projects" },
  { title: "E-Commerce Platform", description: "간단한 e-commerce\n플랫폼 구현", link: "#", type: "Projects" },
  { title: "Chat Application", description: "실시간 채팅 시스템 구축하기", link: "#", type: "Projects" }
];


const Study = () => {
  const [filter, setFilter] = useState("All");
  const filteredItems = filter === "All" ? studyItems : studyItems.filter(item => item.type === filter);

  return (
    <S.Container>
      <S.Header>
        <h1>Study Archives</h1>
        <p>백엔드 개발자로 성장하기 위한 학습 기록</p>
      </S.Header>
      <S.FilterContainer>
        {categories.map((category) => (
          <S.FilterButton key={category} onClick={() => setFilter(category)} active={filter === category}>
            {category}
          </S.FilterButton>
        ))}
      </S.FilterContainer>
      <S.StudyGrid>
        {filteredItems.map((item, index) => (
          <S.StudyCard key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Read More →</a>
          </S.StudyCard>
        ))}
      </S.StudyGrid>
      <Footer />
    </S.Container>
  );
};

export default Study;
