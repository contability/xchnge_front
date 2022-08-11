import styled from "styled-components";

const SelSymbolListPopup = ({off, list, setCont}) => {
    const onClickCont = (val) => {
        if(setCont) setCont(val);
        if(off) off(false);
    };
    return (
        <SelSymbolListPopupBox className="selectPopup" onMouseLeave={() => off()}>
            {list.map((v, i) => (
                <li key={i} onClick={() => onClickCont(v)}>
                    <p>{v.title || v.marketSymbol}</p>
                </li>
            ))}
        </SelSymbolListPopupBox>
    );
};

const SelSymbolListPopupBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  top: 40px;
  position: absolute;
  z-index: 6;
  gap: 16px;
  left: 58px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    padding: 10px 20px;
    text-align: start;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    // & p:first-child{
    //   font-weight: 600;
    //   font-size: 14px;
    //   line-height: 18px;
    //   display: flex;
    //   align-items: center;
    //   letter-spacing: 0.04em;
    //   color: #FFFFFF;
    // }

    // & p:last-child{
    //   font-weight: 500;
    //   font-size: 12px;
    //   line-height: 16px;
    //   display: flex;
    //   align-items: center;
    //   letter-spacing: 0.04em;
    //   color: rgba(255, 255, 255, 0.6);
    // }
  }
`;

export default SelSymbolListPopup;