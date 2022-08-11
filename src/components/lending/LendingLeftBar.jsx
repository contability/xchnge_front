import styled from "styled-components";
import { D_lendingNavList } from "../../data/D_lending";
import L_logo from "../../img/logo/L_logo.svg";
import I_linkWhite from "../../img/icon/I_linkWhite.svg";
import I_rtArwWhite from "../../img/icon/I_rtArwWhite.svg";
import { useNavigate } from "react-router-dom";

export default function LendingLeftBar() {
  const navigate = useNavigate();

  return (
    <LendingLeftBarBox>
      <article className="logoArc">
        <button className="logoBtn" onClick={() => navigate("/")}>
          <img src={L_logo} alt="" />
        </button>
      </article>

      <nav>
        <ul className="navList">
          {D_lendingNavList.map((v, i) => (
            // TODO: style부분 추후 삭제
            <li key={i} onClick={() => navigate(v.url)} style={!v.active?{color:"grey", cursor:"not-allowed"}:{}}>
              <span className="navIcon" />
              {/* <img className="navIcon" src={v.img} alt="" /> */}

              <p>{v.key}</p>

              {v.outLink && (
                <img className="linkIcon" src={I_linkWhite} alt="" />
              )}
            </li>
          ))}
        </ul>
      </nav>

      <article className="setArc">
        <ul className="setList">
          <li>
            <span className="dot" />

            <p>Network</p>

            <img className="arw" src={I_rtArwWhite} alt="" />
          </li>

          <li>
            <span className="dot" />

            <p>English</p>

            <img className="arw" src={I_rtArwWhite} alt="" />
          </li>

          <li>
            <span className="dot" />

            <p>Automatic</p>

            <img className="arw" src={I_rtArwWhite} alt="" />
          </li>
        </ul>
      </article>
    </LendingLeftBarBox>
  );
}

const LendingLeftBarBox = styled.header`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  overflow-y: scroll;

  .logoArc {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 36px;

    .logoBtn {
      display: flex;
      align-items: center;

      img {
        height: 50px;
      }
    }
  }

  nav {
    flex: 1;
    .navList {
      padding: 0 26px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 44px;
        padding: 0 14px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background: rgba(193, 204, 248, 0.14);
        }

        .navIcon {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
        }

        p {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .linkIcon {
          width: 15px;
        }
      }
    }
  }

  .setArc {
    padding: 0 20px;
    .setList {
      border-top: 1px solid rgba(255, 255, 255, 0.2);

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 44px;
        padding: 0 20px;
        cursor: pointer;

        .dot {
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
        }

        p {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .arw {
          height: 12px;
        }
      }
    }
  }
`;
