import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: #fff;
  text-align: center;
  margin-bottom: 350px;
`;

const Header = styled.div`
  h1 {
    font-size: 2rem;
    color: #222;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap; 
  position: sticky;
  top: 20px;
  background: #fff;
  z-index: 10;
  padding: 10px 0; 
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  background: ${({ active }) => (active ? "#000" : "#eee")}; 
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;
  transition: 0.3s;
  width: 120px;
  
  &:hover {
    background: #333;
    color: #fff;
  }
`;

const StudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5개씩 보이도록 */
  gap: 20px;
  margin-top: 20px;
`;

const StudyCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 180px;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 15px;
    flex-shrink: 0;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
    flex-grow: 1;
    flex-shrink: 0;
    white-space: pre-line; /* \n을 줄바꿈으로 처리 */
  }

  a {
    color: #333;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default {
  Container,
  Header,
  FilterContainer,
  FilterButton,
  StudyGrid,
  StudyCard,
};
