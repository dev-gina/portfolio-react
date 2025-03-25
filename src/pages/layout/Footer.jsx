import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import S from "./style"

const Footer = () => {

  const [popupContent, setPopupContent] = useState(null);
  
  // SNS info 
  const snsData = [
    { id: 'blog', url: 'https://blog.naver.com/ah_1113', display: 'Gina Lee' },
    { id: 'notion', url: 'https://puddle-respect-e32.notion.site/832-166b39fd758c80689ce6ddfebefd6f12', display: 'https://puddle-respect-e32.notion.site/832-166b39fd758c80689ce6ddfebefd6f12' },
    { id: 'github', url: 'https://github.com/dev-gina', display: 'https://github.com/dev-gina' }
  ];
  
  const handleSnsClick = (sns) => {
    if (popupContent === sns.id) {
      setPopupContent(null); 
    } else {
      setPopupContent(sns.id); 
    }
  };

  const handlePopupClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <S.Footer>
      <S.Sns>
        {snsData.map((sns) => (
          <div key={sns.id} className="sns-item">
            <img 
              src={process.env.PUBLIC_URL + `/assets/${sns.id}.svg`} 
              alt={sns.id} 
              onClick={() => handleSnsClick(sns)}
            />
            {popupContent === sns.id && (
              <S.SnsPopup onClick={() => handlePopupClick(sns.url)}>
              <p>{sns.display}</p>
            </S.SnsPopup>
            )}
          </div>
        ))}
      </S.Sns>
      <S.BottomLogo>
          <Link to={"/about"}><img src={process.env.PUBLIC_URL + "/assets/gina-logo.svg"} alt="logo" /></Link>
      </S.BottomLogo>
      <S.FooterInfo>
        <p>Portfolio purpose</p>
        <p>Update 2025ver</p>
      </S.FooterInfo>
    </S.Footer>
  )
}

export default Footer