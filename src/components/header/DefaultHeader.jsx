import styled, { keyframes } from "styled-components";
import { D_headerNavList } from "../../data/D_header";
import { useNavigate, useLocation } from "react-router-dom";
import L_logo from "../../img/logo/L_logo.svg";
import ConnectPopup from "./ConnectPopup";
import { useState } from "react";
import PopupBg from "../common/PopupBg";
import I_binanceChainBg from "../../img/wallet/I_binanceChainBg.png";
import I_metaMaskBg from "../../img/wallet/I_metaMaskBg.png";
import I_phantomBg from "../../img/wallet/I_phantomBg.png";
import I_walletConnectBg from "../../img/wallet/I_walletConnectBg.png";
import { strDot } from "../../util/Util";
import SelTradingPopup from "../trading/SelTradingPopup";
import { D_tradingTypeList } from "../../data/D_trading";

export default function DefaultHeader() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const wallet = localStorage.getItem("wallet")?.value;
  const userName = localStorage.getItem("username")?.value;

  const [connectPopup, setConnectPopup] = useState(false);
  const [selTradingPopup, setSelTradingPopup] = useState(false);

  function getWalletIcon() {
    switch (wallet) {
      case "metaMask":
        return I_metaMaskBg;

      case "WalletConnect":
        return I_walletConnectBg;

      case "Phantom":
        return I_phantomBg;

      case "BinanceChain":
        return I_binanceChainBg;
      default:
        break;
    }
  }

  const clickEventHandler = (key, url) => {
    if(url && key !== "Trading"){
      navigate(url);
    }
  };

  const hoverEventHandler = (key, hoverType) => {
    const isEnter = hoverType === "mouseenter" ? true : false;

    switch(key){
      case "Trading":
        setSelTradingPopup(isEnter);
        break;
      default :
        break;
    }
  };

  return (
    <>
      <DefaultHeaderBox>
        <article className="leftArea">
          <button className="logoBtn" onClick={() => navigate("/")}>
            <img src={L_logo} alt="" />
          </button>

          <ul className="navList">
            {D_headerNavList.map((v, i) => (
              <li
                key={i}
                className={`${pathname.indexOf(v.url) !== -1 && "on"}`}
                onClick={() => clickEventHandler(v.key, v.url)}
                onMouseEnter={(e) => hoverEventHandler(v.key, e.type)}
                onMouseLeave={(e) => hoverEventHandler(v.key, e.type)}
                style={!v.active?{color:"grey", cursor:"not-allowed"}:{}}
              >
                {v.key}
                {v.key === "Trading" && selTradingPopup && (
                  <>
                    <SelTradingPopup off={setSelTradingPopup} list={D_tradingTypeList} con={navigate}/>
                  </>
                )}
              </li>
            ))}
          </ul>
        </article>

        <article className="rightArea">
          <span className="tokenBox">
            <span className="dotBox">
              <span className="ani" />
              <span className="dot" />
            </span>

            <p>Ethereum</p>
          </span>

          {userName ? (
            <button className="profBtn" onClick={() => {}}>
              <img src={getWalletIcon()} alt="" />

              <strong>{userName}</strong>
            </button>
          ) : (
            <button
              className="connectBtn"
              onClick={() => setConnectPopup(true)}
            >
              Connect Wallet
            </button>
          )}
        </article>
      </DefaultHeaderBox>

      {connectPopup && (
        <>
          <ConnectPopup off={setConnectPopup} />
          <PopupBg off={setConnectPopup} />
        </>
      )}
    </>
  );
}

const wave = keyframes`
0%{
  opacity: 0;
  transform: scale(0.5);
}
50%{
  opacity: 1;
  
}
100%{
  opacity: 0;
  transform: scale(1);
  
}
`;

const DefaultHeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 30px;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  color: #fff;
  z-index: 6;

  .leftArea {
    display: flex;
    align-items: center;
    gap: 40px;

    .logoBtn {
      display: flex;
      align-items: center;

      img {
        height: 50px;
      }
    }

    .navList {
      display: flex;
      align-items: center;
      gap: 4px;

      li {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 8px;
        border-radius: 6px;
        cursor: pointer;
        position: relative;

        &:hover {
          color: rgba(189, 203, 230, 1);
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  .rightArea {
    display: flex;
    align-items: center;
    gap: 14px;

    .tokenBox {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 600;

      .dotBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        aspect-ratio: 1;
        border-radius: 50%;
        position: relative;

        .ani {
          display: inline-block;
          width: 100%;
          aspect-ratio: inherit;
          border-radius: inherit;
          background: #fff;
          animation: ${wave} 2s infinite linear;
          position: absolute;
        }

        .dot {
          display: inline-block;
          width: 6px;
          aspect-ratio: inherit;
          border-radius: inherit;
          background: #fff;
        }
      }
    }

    .profBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      height: 44px;
      padding: 0 16px;
      font-size: 16px;
      font-weight: 600;
      position: relative;
      border-radius: 8px;

      &:before {
        content: "";
        padding: 1px;
        border-radius: 8px;
        background: linear-gradient(
          117.31deg,
          rgba(255, 255, 255, 0.2) 11.91%,
          rgba(255, 255, 255, 0.02) 35.27%,
          rgba(255, 255, 255, 0) 57.36%,
          rgba(255, 255, 255, 0.04) 74.41%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        position: absolute;
        inset: 0;
      }
    }

    .connectBtn {
      height: 44px;
      padding: 0 20px;
      background: linear-gradient(
        114.85deg,
        rgba(189, 203, 230, 0.3) 20.53%,
        rgba(189, 203, 230, 0) 104.02%
      );
      border-radius: 8px;
      position: relative;

      &:hover {
        filter: brightness(60%);
      }

      &:before {
        content: "";
        padding: 1px;
        border-radius: 8px;
        background: linear-gradient(
          117.31deg,
          rgba(255, 255, 255, 0.2) 11.91%,
          rgba(255, 255, 255, 0.02) 35.27%,
          rgba(255, 255, 255, 0) 57.36%,
          rgba(255, 255, 255, 0.04) 74.41%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        position: absolute;
        inset: 0;
      }
    }
  }
`;
