import { styled } from 'styled-components';

const S = {};

S.AboutWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

S.TimelineContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 50px 0;
  padding: 20px;
`;

S.TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  &:nth-child(odd) {
    background-color: #e9e9e9;
  }
`;

S.TimelineDate = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

S.TimelineContent = styled.div`
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
    color: #555;
  }
`;

export default S;
