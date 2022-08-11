import styled from "styled-components";
import I_xWhite from "../../../img/icon/I_xWhite.svg";
import I_dnPolWhite from "../../../img/icon/I_dnPolWhite.svg";
import T_btc_usdt from "../../../img/token/T_btc_usdt.png";
import PopupBg from "../../common/PopupBg";
import { useState } from "react";
import { D_depositTypeList } from "../../../data/D_trading";
import SelDepositPopup from "../depositPopup/SelDepositPopup";

export default function WithdrawConfirmPopup({ off, nextCont }) {
  const confirm = () => {
    nextCont(true);
    off();
  };

  return (
    <WithdrawConfirmPopupBox className="defaultPopup">
      <article className="bgArea" />

      <article className="topArea">
        <span className="blank" />

        <strong className="title">Withdraw</strong>

        <button className="exitBtn" onClick={() => off()}>
          <img src={I_xWhite} alt="" />
        </button>
      </article>

      <article className="contArea">
        <ul className="setList">
          {/* <li className="withdrawBox">
            <p className="key">Withdraw</p>
            <div className="value">
              <div className="inputBox">
                <button
                  className="selBtn"
                  onClick={() => setSelDepositPopup(true)}
                >
                  <p>{depositType}</p>

                  <img src={I_dnPolWhite} alt="" />
                </button>

                {selDepositPopup && (
                  <>
                    <SelDepositPopup
                      off={setSelDepositPopup}
                      list={D_depositTypeList}
                      setCont={setDepositType}
                    />
                    <PopupBg off={setSelDepositPopup} />
                  </>
                )}
              </div>
            </div>
          </li> */}

          {/* <li className="amountBox">
            <p className="key">Amount</p>

            <div className="value">
              <div className="inputBox">
                <span className="tokenBox">
                  <img src={T_btc_usdt} alt="" />
                  <p>BTC</p>
                </span>

                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />

                <button className="maxBtn" onClick={() => {}}>
                  MAX
                </button>
              </div>
            </div>

            <div className="balanceBox">
              <p className="key">Balance</p>&nbsp;&nbsp;
              <p className="value">0.0000 USDT</p>
            </div>
          </li> */}

          {/* <li className="addrBox">
            <p className="key">Wallet Address</p>
            <div className="value">
              <div className="inputBox">
              <input
                type="text"
                dir="ltr"
                  onChange={() => {}}
                />
              </div>
            </div>
          </li> */}

          <li className="descriptionBox">
            <p className="description">
              Your withdrawal requests are processed in 3 business days.
            </p>
          </li>

          <li className="resultBox">
            <p className="result">
              <div>
                <span className="resultTitle">Fee</span>
                <span className="resultValue">1.00</span>
              </div>
              <div>
                <span className="resultTitle">Total</span>
                <span className="resultValue">1.00</span>
              </div>
            </p>
          </li>

          <li className="submitBox">
            <div className="btnBox">
              <button onClick={confirm}>Confirm</button>
            </div>
          </li>
        </ul>
      </article>
    </WithdrawConfirmPopupBox>
  );
}

const WithdrawConfirmPopupBox = styled.section`
  width: 472px;
  

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
    padding: 0 34px 40px;
    font-size: 14px;
    font-weight: 600;

    .setList {
      display: flex;
      flex-direction: column;
      gap: 42px;

      & > li {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &.withdrawBox {
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
          & > .value {
            .inputBox {
              gap: 16px;
              padding: 0 20px;

              .tokenBox {
              }
            }
          }
        }

        &.addrBox {
          & > .value {
            .inputBox {
              gap: 16px;
              padding: 0 20px;

              .tokenBox {
              }
            }
          }
        }

        &.descriptionBox{
          align-items: center;
          padding-top: 18px;

          p{
            width: 333px;
            font-family: 'Sarabun';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            text-align: center;
            letter-spacing: 0.02em;
          }
        }

        &.resultBox{
          height: 78px;
          width: 404px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          justify-content: center;
          padding: 0 18px;
          margin-bottom: 88px;

          .result{
            display: flex;
            flex-direction: column;
            gap: 4px;

            div{
              display: flex;
              justify-content: space-between;

              .resultTitle{
                font-family: 'Sarabun';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: 0.04em;
                color: rgba(255, 255, 255, 0.4);
              }
              .resultValue{
                font-family: 'Sarabun';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: 0.04em;
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
