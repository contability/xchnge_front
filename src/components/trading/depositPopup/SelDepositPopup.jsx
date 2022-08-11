import { useSelector } from "react-redux";
import styled from "styled-components";

export default function SelDepositPopup({ off, list, setCont }) {
  const isMobile = useSelector((state) => state.common.isMobile);

  function onClickCont(v) {
    if (setCont) setCont(v);
    if (off) off();
  }

  return (
    <SelDepositPopupBox className="selectPopup">
      {list.map((v, i) => (
        <li key={i} onClick={() => onClickCont(v)}>
          <p>{v}</p>
        </li>
      ))}
    </SelDepositPopupBox>
  );
}

const SelDepositPopupBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  top: 56px;
  position: absolute;
  z-index: 6;

  li {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    text-align: start;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
