import styled from "styled-components";
import I_xWhite from "../../img/icon/I_xWhite.svg";
import I_binance from "../../img/wallet/I_binance.png";
import I_metaMask from "../../img/wallet/I_metamask.png";
import I_phantom from "../../img/wallet/I_phantom.png";
import I_walletconnect from "../../img/wallet/I_walletconnect.png";

export default function ConnectPopup({ off }) {
  function onClickMetaMask() {
    localStorage.setItem("wallet", "metaMask");
    localStorage.setItem("address", "0XEE3MMMMMMMMMM23A5");
    off();
  }

  function onClickWalletConnect() {
    localStorage.setItem("wallet", "WalletConnect");
    localStorage.setItem("address", "0XEE3MMMMMMMMMM23A5");
    off();
  }

  function onClickPhantom() {
    localStorage.setItem("wallet", "Phantom");
    localStorage.setItem("address", "0XEE3MMMMMMMMMM23A5");
    off();
  }

  function onClickBinance() {
    localStorage.setItem("wallet", "BinanceChain");
    localStorage.setItem("address", "0XEE3MMMMMMMMMM23A5");
    off();
  }

  return (
    <ConnectPopupBox className="defaultPopup">
      <article className="bgArea" />

      <article className="topArea">
        <span className="blank" />

        <strong className="title">Connect your wallet to protocol</strong>

        <button className="exitBtn" onClick={() => off()}>
          <img src={I_xWhite} alt="" />
        </button>
      </article>

      <article className="contArea">
        <ul className="walletList">
          <li onClick={onClickMetaMask}>
            <img src={I_metaMask} alt="" />
            <p>Meta mask</p>
          </li>
          <li onClick={onClickWalletConnect}>
            <img src={I_walletconnect} alt="" />
            <p>Walletconnect</p>
          </li>
          <li onClick={onClickPhantom}>
            <img src={I_phantom} alt="" />
            <p>Phantom</p>
          </li>
          <li onClick={onClickBinance}>
            <img src={I_binance} alt="" />
            <p>Binance Chain</p>
          </li>
        </ul>
      </article>

      <article className="bottomArea">
        <p>
          New here?&nbsp;
          <span className="gray">Get started on protocol!</span>
        </p>
      </article>
    </ConnectPopupBox>
  );
}

const ConnectPopupBox = styled.section`
  width: 580px;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    padding: 0 40px;
    font-size: 20px;

    .blank,
    .exitBtn img {
      width: 16px;
      opacity: 0.6;
    }
  }

  .contArea {
    .walletList {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 12px;
      padding: 8px 27px 56px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 256px;
        height: 56px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 600;
        background: linear-gradient(
          117.6deg,
          rgba(189, 203, 230, 0.1) 19.28%,
          rgba(189, 203, 230, 0) 84.16%
        );
        position: relative;
        cursor: pointer;

        &:before {
          content: "";
          padding: 1px;
          border-radius: 8px;
          background: linear-gradient(
            117.31deg,
            rgba(255, 255, 255, 0.2) 11.91%,
            rgba(255, 255, 255, 0.02) 35.27%,
            rgba(255, 255, 255, 0) 57.36%,
            rgba(255, 255, 255, 0.08) 74.41%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          position: absolute;
          z-index: -1;
          inset: 0;
        }

        &:hover {
          transform: translate(0, -2px);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        }

        img {
          width: 34px;
        }
      }
    }
  }

  .bottomArea {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    font-size: 14px;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.14) -0.86%,
      rgba(255, 255, 255, 0.014) 114.83%
    );

    p {
      .gray {
        opacity: 0.6;

        &:hover {
          text-decoration: underline;
          text-decoration-color: #fff;
        }
      }
    }
  }
`;
