import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin-bottom: 150px;
  background-color: white;
  color: #333;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
  padding-top: 1px; 
  padding-bottom: 1px; 
  background-color: white;
  z-index: 10;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  border: 2px solid #333;
  border-radius: 5px;
  background: ${({ active }) => (active ? '#333' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #333;
    color: white;
  }
`;

const StudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StudyCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
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
  StudyCard
};
