import styled from 'styled-components';

// 전체 프로젝트 컨테이너
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem; 
  margin: 2rem auto; 
  max-width: 1280px;
  padding: 0 1rem; 
`;

// 개별 프로젝트 아이템
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// 오른쪽 섹션
const RightSection = styled.div`
  img {
    width: 100%;
    height: auto;  
    border-bottom: 2px solid #f4f4f4;
    border-radius: 10px 10px 0 0; 
  }
`;

// 왼쪽 섹션
const LeftSection = styled.div`
  padding: 1rem;
  flex: 1; 
`;

// 프로젝트 제목
const ProjectContent = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

// 프로젝트 세부 정보 부분
const ProjectDetails = styled.div`
  color: #555;
  margin-top: 0.25rem; 
`;

// 세부 항목 제목 (예: 역할, 도구 등)
const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: #333;
`;

// 메인 이미지 스타일
const Main = styled.img`
  border-radius: 10px 10px 0 0;
  max-width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// 모바일에서 프로젝트 아이템이 세로로 배치되도록 스타일링 (반응형)
const MobileSection = styled.div`
  @media (max-width: 768px) {
    ${ProjectItem} {
      flex-direction: column;
    }
  }
`;

const S = {
  ProjectsContainer,
  ProjectItem,
  LeftSection,
  RightSection,
  ProjectContent,
  ProjectDetails,
  SectionTitle,
  Main,
  MobileSection,
};

export default S;
