import styled from "styled-components";
import I_xWhite from "../../img/icon/I_xWhite.svg";
import I_dnPolWhite from "../../img/icon/I_dnPolWhite.svg";
import T_usdt from "../../img/token/T_usdt.png";
import PopupBg from "../common/PopupBg";
import { useState } from "react";
import axios from "axios";
import { API, URL } from "../../configs/api";
import { getLocalStorage, setLocalStorage } from "../../util/common";
// import { D_depositTypeList } from "../data/D_trading";
// import { io} from 'socket.io-client'

export default function SignInPopup({ off }) {
  const [selDepositPopup, setSelDepositPopup] = useState(false);
  // const [depositType, setDepositType] = useState(D_depositTypeList[0]);
  const [amount, setAmount] = useState("");
  const [eMail, setEMail] = useState("");
  const [pw, setPw] = useState("");

  
  // const socket = io('http://user.defi1.net:33845')
  // socket.on('evaluate', (data) => {
  //   console.log(data)
  // })
  const keyPressHandler = (e) => {
    if(e.key === "Enter"){
      signIn();
    }
  };

  const submitEvent = () => {
    let isLogin = getLocalStorage("sessionId")?.value ? true : false;

    if (isLogin) signOut();
    else signIn();
  };

  const signIn = () => {
    if (!eMail) alert("empty Id");
    else if (!pw) alert("empty pw");
    axios
      .post(`${API.API_SIGNIN}`, {
        email: eMail,
        pw,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.status === "OK") {
          setLocalStorage("sessionId", data.sessionId);
          setLocalStorage("userName", data.username);
          alert("success");
          off();
        }
      })
      .catch((err) => console.error(err));
  };

  const signOut = () => {
    axios
    .post(API.API_SIGNOUT)
    .then((res) => {
      console.log(res);
    })
    .catch(err => console.error(err));
  };

  return (
    <LoginPopupBox className="defaultPopup">
      <article className="bgArea" />

      <article className="topArea">
        <span className="blank" />

        <strong className="title">Sign In</strong>

        <button className="exitBtn" onClick={() => off()}>
          <img src={I_xWhite} alt="" />
        </button>
      </article>

      <article className="contArea">
        <ul className="setList">
          <li className="depositBox">
            <p className="key">E-Mail</p>
            <div className="value">
              <div className="inputBox">
                {/* <button
                  className="selBtn"
                  onClick={() => setSelDepositPopup(true)}
                > */}
                {/* <p>{depositType}</p> */}

                {/* <img src={I_dnPolWhite} alt="" /> */}
                {/* </button> */}
                <input
                  // value={amount}
                  onChange={(e) => setEMail(e.target.value)}
                  onKeyPress={e => keyPressHandler(e)}
                />
              </div>
            </div>
          </li>

          <li className="amountBox">
            <p className="key">Password</p>

            <div className="value">
              <div className="inputBox">
                {/* <span className="tokenBox">
                  <img src={T_usdt} alt="" />
                  <p>USDT</p>
                </span> */}

                <input
                  type="password"
                  onChange={(e) => setPw(e.target.value)}
                  onKeyPress={e => keyPressHandler(e)}
                />

                {/* <button className="maxBtn" onClick={() => {}}>
                  MAX
                </button> */}
              </div>
            </div>

            {/* <div className="balanceBox">
              <p className="key">Balance</p>&nbsp;&nbsp;
              <p className="value">0.0000 USDT</p>
            </div> */}
          </li>
          <li className="submitBox">
            <div className="loginBox">
              <button onClick={submitEvent}>Sign In</button>
            </div>
          </li>
        </ul>
      </article>
    </LoginPopupBox>
  );
}

const LoginPopupBox = styled.section`
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
      gap: 20px;

      & > li {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &.depositBox {
          .value {
            .inputBox {
              gap: 16px;
              padding: 0 20px;
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

        &.submitBox {
          .loginBox {
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
