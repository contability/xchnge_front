import moment from "moment";
import styled from "styled-components";
import { D_tradesHeaderList, D_tradeList } from "../../../data/D_trading";

export default function Trades() {
  return (
    <TradesBox>
      <ul className="listHeader">
        {D_tradesHeaderList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <ul className="list">
        {D_tradeList.map((v, i) => (
          <li key={i}>
            <span>
              <p>{v.size.toFixed(1)}</p>

              <div
                className={`${v.type} fill`}
                style={{ width: `${(v.size / v.price) * 100}%` }}
              />
            </span>
            <span>
              <p>{v.price}</p>
            </span>
            <span>
              <p>{moment(v.time).format("hh:mm:ss")}</p>
            </span>
          </li>
        ))}
      </ul>
    </TradesBox>
  );
}

const TradesBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;

  .listHeader {
    display: flex;
    align-items: center;
    height: 34px;

    li {
      flex: 1;
      text-align: end;
      color: #7a7a7a;
    }
  }

  .list {
    flex: 1;
    overflow-y: scroll;

    li {
      display: flex;
      height: 22px;

      span {
        flex: 1;
        text-align: end;
        color: #9d9fa2;
        position: relative;
        overflow: hidden;

        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .fill {
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;

          &.up {
            background: rgba(63, 182, 139, 0.2);
          }

          &.dn {
            background: rgba(255, 83, 83, 0.2);
          }
        }
      }
    }
  }

  .listHeader li,
  .list li span {
    padding: 0 4px;

    &:nth-of-type(3) {
      padding: 0 20px;
    }
  }
`;
