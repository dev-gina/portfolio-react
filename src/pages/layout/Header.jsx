import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import S from "./style";

const Header = () => {
    // contact popup
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };

    // to send sms
    const handleSendSMS = () => {
        window.location.href = "sms:+821024003252";
    };

    return (
        <S.Header>
            <S.Logo>
                <Link to={"/portfolio"}><img src={process.env.PUBLIC_URL + "/assets/gina-logo.svg"} alt="logo" /></Link>
            </S.Logo>
            <S.MainMenu>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to={"/portfolio"}>PORTFOLIO</Link></li>
                <li><Link to={"/study"}>STUDY ARCHIVES</Link></li>
            </S.MainMenu>
            <S.Contact onClick={handleShowPopup}>
                CONTACT ME!
            </S.Contact>
            
            {isOpenPopup && (
                <S.ContactPopup>
                <S.PopupClose onClick={handleShowPopup}>×</S.PopupClose>
                <S.PopupTitle>Contact Information</S.PopupTitle>
                <S.PopupContent>
                    <S.ContactItem onClick={handleSendSMS}>
                        <S.ContactIcon src={process.env.PUBLIC_URL + "/assets/phone.svg"} alt="phone" />
                        <S.ContactText>Mobile: (+82)010-2400-3252</S.ContactText>
                    </S.ContactItem>
                    <S.ContactNote>Click to send SMS</S.ContactNote>
                </S.PopupContent>
            </S.ContactPopup>
            )}
        </S.Header>
    );
};

export default Header;