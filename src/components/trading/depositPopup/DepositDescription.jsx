import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {D_depositDescription} from "../../../data/D_trading"

export default function DepositDescription({ bg, blur, off, index, nextPopup }) {
  const dispatch = useDispatch();

  function onClickBg() {
    if (off) off();
  }

  function getOpt() {
    let className = "";

    if (bg) className += " bg";
    if (blur) className += " blur";

    return className;
  }

  const openNextPopup = () => {
    nextPopup(true);
    off();
  };

  return (
    <DepositDescriptionBox
        onClick={onClickBg}
        className={getOpt()}
        style={{ zIndex: index && index }}
    >
        <p>Important:</p>
        <ul>
            {D_depositDescription.map((v,i)=>(
                <li key={i}>
                  {v}
                </li>
              ))
            }
        </ul>
        <p className="btnBox">
            <button onClick={openNextPopup}>Acknowledge</button>
        </p>
    </DepositDescriptionBox>
  );
}

const DepositDescriptionBox = styled.div`
  position: absolute;
  width: 85.6%;
  height: 79%;
  top: 13%;
  left: 34px;
  z-index: 5;
  display:flex;
  flex-direction: column;
  gap: 20px;
  

  li{
    list-style: disc;
    padding-bottom: 10px;

    font-family: 'Sarabun';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    
    color: rgba(255, 255, 255, 0.6);
  }

  .btnBox{
    font-family: 'Sarabun';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.04em;

    color: #BDCBE6;

  }

  button{
      padding-left: 125px;
    &:hover{
        text-decoration: underline;
    }
  }

  

  &.bg {
    background: rgba(0, 0, 0, 0.3);
  }

  &.blur {
    // backdrop-filter: blur(50px);
    // -webkit-backdrop-filter: blur(50px);

    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(40px);
    border-radius: 8px;
    padding: 13px 5px 40px 40px;
  }
`;
