import styled from "styled-components";

import { useSelector } from "react-redux";
import LendingLeftBar from "../../components/lending/LendingLeftBar";
import { useEffect, useState } from "react";
import ConnectPopup from "../../components/header/ConnectPopup";
import PopupBg from "../../components/common/PopupBg";
import DepositPopup from "../../components/trading/depositPopup/DepositPopup";
import { getLocalStorage } from "../../util/common";
import SignInPopup from "../../components/header/SignInPopup";
import axios from "axios";
import { API, URL } from "../../configs/api";
import { io} from 'socket.io-client';


export default function Lending() {
  const isMobile = useSelector((state) => state.common.isMobile);
  const [socket, setSocket] = useState();
  const [connectPopup, setConnectPopup] = useState(false);
  const [depositPopup, setDepositPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);
  const [nickname, setNickname] = useState("");
  const userName = getLocalStorage("userName")?.value;
  
  const chkSignIn = () => {
    let isLogin = getLocalStorage("userName")?.value ? true : false;
    if (isLogin) signOut();
    else setSignInPopup(true);
  };

  const signOut = () => {
    axios
      .post(`${API.API_SIGNOUT}`)
      .then((res) => {
        localStorage.removeItem("sessionId");
        localStorage.removeItem("userName");
        setNickname("");
        alert("Sign Out");
      })
      .catch((err) => console.error(err));
  };

  ////////////////////// socketEvent
  // TODO: 서버와의 socket 알림 test success. 펑션 위치 옮겨야할 것 같음.
  // useEffect(() => {
  //   const socketio = io(URL);
  //   socketio.on('evaluate', (data) => {
  //     console.log(data);
  //   });
  //   setSocket(socketio);
  //   console.log(socketio);
  // }, []);

  // useEffect(() => {
  //   return (() => {
  //     if(socket){
  //       socket.disconnect();
  //     }
  //   });
  // }, [socket]);

  useEffect(() => {
    setNickname(userName);
  }, [userName]);

  return (
    <>
      <PlendingBox>
        <LendingLeftBar />

        <section className="innerBox">
          <header>
            <button className="signInBtn" onClick={() => chkSignIn()}>
              {nickname || "Sign In"}
            </button>
            <button
              className="connectBtn"
              onClick={() => setConnectPopup(true)}
            >
              Connect Wallet
            </button>
          </header>

          <article className="contArea"></article>
        </section>
      </PlendingBox>

      {signInPopup && (
        <>
          <SignInPopup off={setSignInPopup} />
          <PopupBg off={setSignInPopup} />
        </>
      )}

      {connectPopup && (
        <>
          <ConnectPopup off={setConnectPopup} />
          <PopupBg off={setConnectPopup} />
        </>
      )}

      
    </>
  );
}

const PlendingBox = styled.main`
  display: flex;
  height: 100vh;
  padding: 0 0 40px;
  color: #fff;
  background: #0a0e17;

  .innerBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 40px 0 0;

    header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100px;
      gap: 10px;

      .connectBtn,
      .signInBtn {
        height: 44px;
        width: 148px;
        padding: 0 20px;
        background: linear-gradient(
          114.85deg,
          rgba(189, 203, 230, 0.3) 20.53%,
          rgba(189, 203, 230, 0) 104.02%
        );
        border-radius: 8px;
      }
    }

    .contArea {
      flex: 1;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }
  }
`;
