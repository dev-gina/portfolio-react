import styled from "styled-components";

const S = {};


S.Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: 000;
    font-family: "League Spartan";
    position: relative; 
`;

S.Content = styled.div`
    flex-grow: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    margin-bottom: 60px;
    width: 100%; // 너비 100% 지정
    max-width: 1440px; // 최대 너비 설정
    margin-left: auto; // 중앙 정렬
    margin-right: auto; // 중앙 정렬
    box-sizing: border-box;
`;

S.Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;  
    position: fixed;  
    top: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box; // 패딩이 너비에 포함되도록 설정
    background-color: #fff;
    
    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 15px;
    }
        & > div, & > ul, & > button {
        flex-shrink: 0; // 헤더의 자식 요소들이 축소되지 않도록
    }
`;

S.Logo = styled.div`
    display: flex;
    align-items: center;
    
    & img {
        width: 140px;
        height: auto;
    }
    
    @media (max-width: 1200px) {
        margin-left: 0;
    }
`;


S.MainMenu = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    list-style: none;
    font-size: 16px;
    font-weight: bold;
    margin: 0 20px;
    padding: 0;

    & li {
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        white-space: nowrap;
        
        & a {
            text-decoration: none;
            color: #111111;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    
    @media (max-width: 768px) {
        gap: 20px;
        font-size: 14px;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

S.Contact = styled.button`
    width: 160px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 50px;
    border: none;
    background: #d9d9d9;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    color: #111111;
    white-space: nowrap;
    overflow: visible; 
    padding: 0 20px;

    &:hover {
        background: #111111;
        color: #ffffff;
    }
    
    @media (max-width: 1200px) {
        margin-left: 0;
    }
`;

// style.js에 추가할 내용
S.ContactPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    padding: 25px;
    z-index: 1000;
    min-width: 300px;
    text-align: center;
    
    @media (max-width: 768px) {
        width: 90%;
        min-width: unset;
    }
`;

S.PopupClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #796465;
    line-height: 1;
    padding: 0;
    margin: 0;
    
    &:hover {
        color: #111111;
    }
`;

S.PopupTitle = styled.h3`
    margin: 0 0 20px 0;
    color: #796465;
    font-size: 18px;
    font-weight: bold;
`;

S.PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

S.ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    transition: background-color 0.2s;
    cursor: pointer;
    
    &:hover {
        background-color: #f5f5f5;
    }
`;

S.ContactIcon = styled.img`
    font-size: 20px;
`;

S.ContactText = styled.p`
    margin: 0;
    color: #111111;
    font-size: 16px;
`;

S.ContactNote = styled.p`
    margin: 5px 0 0 0;
    color: #999;
    font-size: 12px;
    font-style: italic;
`;

// footer style
S.Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
`;


// S.Sns = styled.div`
//     margin-left: 15px;
//     display: flex; // flex로 변경하여 자식 요소들을 정렬
//     gap: 20px; // 아이콘 사이 간격 20px 설정
    
//     & img {
//         width: 20px;
//         height: 20px;
//     }
    
// `;

// style.js에 추가할 내용
S.Sns = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 20px; // 아이콘 사이 간격 20px
  
  & img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.2); // 호버 시 약간 확대
    }
  }
  
  & .sns-item {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

S.SnsPopup = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid white;
  }
  
  & p {
    margin: 0;
    font-size: 12px;
    color: #333;
  }
     
  &:hover {
    background-color: #f5f5f5;
  }
`;

S.BottomLogo = styled.div`
    margin-right: 15px;
    
    & img {
        width: 60px;
        height: auto;
    }
`;

S.FooterInfo = styled.div`
    & p {
        font-size: 9px;
        text-align: center;
        color: #000000;
        margin: 0;
        max-width: 100%; 
        white-space: normal; 
        overflow: visible;  
        padding-right: 15px; 
    }
`;

export default S;
