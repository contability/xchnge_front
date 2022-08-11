import styled from "styled-components";

const SelTradingPopup = ({off, list, con}) => {
    const onClickCont = (url) => {
        if(con) con(url);
        if(off) off(false);
    };
    return (
        <SelTradingPopupBox className="selectPopup">
            {list.map((v, i) => (
                <li key={i} onClick={() => onClickCont(v.url)}>
                    <p>{v.title}</p>
                    <p>{v.description}</p>
                </li>
            ))}
        </SelTradingPopupBox>
    );
};

const SelTradingPopupBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  top: 40px;
  position: absolute;
  z-index: 6;
  gap: 16px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    height: 44px;
    padding: 0 20px;
    text-align: start;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    & p:first-child{
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      color: #FFFFFF;
    }

    & p:last-child{
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export default SelTradingPopup;