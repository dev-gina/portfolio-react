import styled from 'styled-components';

// 전체 프로젝트 컨테이너
const ProjectsContainer = styled.div`
  max-width: 1360px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap; 
  justify-content: space-between;
  padding-top: 0; 
  margin-left: auto;
  margin-right: auto;
`;

// 개별 프로젝트 아이템
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px; 
  height: 740px; 
  background-color: #ffffff;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// 이미지 영역
const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 
  
  img {
    width: 100%;  
    height: 200px; 
    object-fit: cover; 
  }
`;

// 내용 영역
const LeftSection = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

// 프로젝트 제목
const ProjectContent = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 1px;
`;

// 세부 항목 제목
const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1px;
  color: #333;
`;

// 프로젝트 세부 정보 부분
const ProjectDetails = styled.div`
  color: #555;
  margin-top: 1px;
`;

// 메인 이미지 스타일
const Main = styled.img`
  border-radius: 10px 10px 0 0;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// 모바일 반응형 스타일
const MobileSection = styled.div`
  @media (max-width: 768px) {
    ${ProjectItem} {
      flex-direction: column;
      width: 100%; 
    }
  }
`;

const S = {
  ProjectsContainer,  // 프로젝트 컨테이너
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
