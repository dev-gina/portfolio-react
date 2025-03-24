import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  width: 100%;
  max-width: 500px;
`;

const MainImage = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VerticalText = styled.span`
  position: absolute;
  left: 10px;
  transform: rotate(-90deg);
  font-size: 14px;
  letter-spacing: 2px;
`;

const TextSection = styled.div`
  flex: 1;
  padding-left: 50px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    margin-top: 20px;
  }
`;

const S = {
  Container,
  ImageSection,
  ImageGrid,
  MainImage,
  SmallImage,
  VerticalText,
  TextSection,
};

export default S;