import styled from "styled-components";
import I_xWhite from "../../../img/icon/I_xWhite.svg";
import I_dnPolWhite from "../../../img/icon/I_dnPolWhite.svg";
import T_usdt from "../../../img/token/T_usdt.png";
import SelDepositPopup from "./SelDepositPopup";
import { useEffect, useState } from "react";
import { D_depositTypeList } from "../../../data/D_trading";
import demoQr from "../../../img/demo/demo_qr.png";
import I_copySqrWhite from "../../../img/icon/I_copySqrWhite.png";
import I_listCircleWhite from "../../../img/icon/I_listCircleWhite.png"
import DepositDescription from "./DepositDescription";

// TODO:
const DepositQrPopup = ({off, progressPopup}) => {

  const [descriptionPopup, setDescriptionPopup] = useState(false);

  return(
  <DepositQrPopupBox className="defaultPopup">
    <article className="bgArea" />

    <article className="topArea">
      <span className="blank" />

      <strong className="title">Deposit</strong>

      <button className="exitBtn" onClick={() => off()}>
        <img src={I_xWhite} alt="" />
      </button>
    </article>

    
    <article className="contArea">
      <ul className="setList">
        <li className="qrBox">
            <button className="qr" onClick={() => setDescriptionPopup(true)}>
              <img src={demoQr} alt="" />
            </button>
        </li>
        <li className="amountBox">
          <p className="key">USDT Wallet Address</p>
          <div className="value">
            <div className="inputBox">
              <div className="addrBox">0x3ce3ee8b0f58caf2837721a889f6d10dee8abee1</div>
              <button className="copyBtn" onClick={() => {}}>
                <img src={I_copySqrWhite} alt="" />
              </button>
            </div>
          </div>
        </li>
      </ul>
        {descriptionPopup && (
          <>
            <DepositDescription off={off} blur={true} index={10} nextPopup={progressPopup}/>
          </>
        )}
    </article>
  </DepositQrPopupBox>
  );
};

export default DepositQrPopup;

const DepositQrPopupBox = styled.section`
  width: 472px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .bgArea {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      104.28deg,
      rgba(255, 255, 255, 0.1) 0.69%,
      rgba(0, 0, 104, 0.08) 113%
    );
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.2),
      inset 2px 2px 2px rgba(255, 255, 255, 0.2);
    position: absolute;
    z-index: -1;
  }

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0 40px;
    font-size: 18px;

    .blank,
    .exitBtn img {
      width: 16px;
      opacity: 0.6;
    }
  }

  .contArea {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 34px 62px;
    font-size: 14px;
    font-weight: 600;

    .setList {
      display: flex;
      flex-direction: column;
      gap: 40px;
      position: relative;

      & > li {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &.qrBox {
          align-items: center;
          .qr{
            width: 220px;
            height: 216px;

            background: #FFFFFF;
            border-radius: 8px;
          }
          .value {
            .inputBox {
              
              .selBtn {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                height: 100%;
                padding: 0 20px;
                font-size: 16px;
                font-weight: 600;

                p {
                  flex: 1;
                  text-align: start;
                }

                img {
                  width: 12px;
                  opacity: 0.4;
                }
              }
            }
          }
        }

        &.amountBox {
          & > .key{
            font-family: 'Sarabun';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.04em;

            color: rgba(255, 255, 255, 0.4);
          }
          & > .value {
            .inputBox {
              gap: 16px;
              padding: 0 20px;
              .addrBox{
                font-family: 'Sarabun';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: 0.02em;

                color: #FFFFFF;
              }
            }
          }
        }

        &.submitBox {
          .btnBox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            font-size: 18px;
            font-weight: 600;
            border: 1px solid transparent;
            border-radius: 8px;
            position: relative;
            background: linear-gradient(
              117.6deg,
              rgba(189, 203, 230, 0.1) 19.28%,
              rgba(189, 203, 230, 0) 84.16%
            );

            button {
              width: 100%;
              height: 100%;
              color: rgba(255, 255, 255, 0.2);
              background: linear-gradient(
                117.6deg,
                rgba(189, 203, 230, 0.1) 19.28%,
                rgba(189, 203, 230, 0) 84.16%
              );
              border-radius: 8px;

              &:hover {
                background: linear-gradient(
                  101.59deg,
                  rgba(206, 223, 255, 0.8) 3.2%,
                  rgba(80, 72, 142, 0) 116.47%
                );
                border-radius: 8px;
                color: rgba(189, 203, 230, 0.9);
              }
            }

            .tokenBox {
              display: flex;
              align-items: center;
              gap: 4px;

              img {
                height: 38px;
              }
            }

            input {
              flex: 1;
              text-align: end;
            }

            .maxBtn {
            }
          }
        }

        & > .key {
          color: rgba(255, 255, 255, 0.4);
        }

        & > .value {
          .inputBox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            font-size: 18px;
            font-weight: 600;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid transparent;
            border-radius: 8px;
            position: relative;

            &:focus-within {
              border-color: #fff;
            }

            .tokenBox {
              display: flex;
              align-items: center;
              gap: 4px;

              img {
                height: 38px;
              }
            }

            input {
              flex: 1;
              text-align: end;
            }

            .maxBtn {
            }
          }
        }

        .balanceBox {
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
          font-weight: 600;

          .key {
            opacity: 0.4;
          }
        }
      }
    }
  }
`;
