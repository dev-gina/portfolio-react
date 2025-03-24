import styled from "styled-components";

const S = {}

S.Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

S.Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Main = styled.img`
  width: 100%;
  height: 100%;  
  object-fit: cover;  
`;

export default S;
