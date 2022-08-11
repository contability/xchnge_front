import { useSelector } from "react-redux";
import styled from "styled-components";
import { D_spotList } from "../../../data/D_trading";

export default function SpotCategoryPopup({ off, cont, setCont }) {
  const isMobile = useSelector((state) => state.common.isMobile);

  function onClickCont(v) {
    if (setCont) setCont(v);
    if (off) off();
  }

  return (
    <SpotCategoryPopupBox className="selectPopup">
      {D_spotList.map((v, i) => (
        <li
          key={i}
          className={`${cont === v && "on"}`}
          onClick={() => onClickCont(v)}
        >
          <p>{v}</p>
        </li>
      ))}
    </SpotCategoryPopupBox>
  );
}

const SpotCategoryPopupBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 146px;
  padding: 6px;
  background: #0a0e17;
  border: 1px solid #3b3e45;
  border-radius: 6px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  top: 50px;
  right: 0;
  position: absolute;
  overflow-y: scroll;
  z-index: 6;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    border-radius: inherit;
    cursor: pointer;

    &:hover {
      color: #fff;
    }

    &.on {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
