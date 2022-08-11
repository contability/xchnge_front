import { useState } from "react";
import styled from "styled-components";
import { D_limitCategoryList } from "../../../data/D_trading";

export default function SpotLimit() {
  const [category, setCategory] = useState(D_limitCategoryList[0]);
  const [amount, setAmount] = useState("");
  const [triggerPrice, setTriggerPrice] = useState("");
  const [limitPrice, setLimitPrice] = useState("");

  return (
    <SpotLimitBox>
      <div className="topBox">
        <ul className="categoryList">
          {D_limitCategoryList.map((v, i) => (
            <li
              key={i}
              className={`${category === v && "on"}`}
              onClick={() => setCategory(v)}
            >
              {v}
            </li>
          ))}
        </ul>

        <ul className="setList">
          <li>
            <div className="key">
              <p className="title">Amount</p>
            </div>

            <div className="value">
              <div className="inputBox">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0000"
                />

                <strong className="unit">USDT</strong>
              </div>
            </div>
          </li>

          <li>
            <div className="key">
              <p className="title">Trigger Price</p>
            </div>

            <div className="value">
              <div className="inputBox">
                <input
                  value={triggerPrice}
                  onChange={(e) => setTriggerPrice(e.target.value)}
                  placeholder="0.0000"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="key">
              <p className="title">Limit Price</p>
            </div>

            <div className="value">
              <div className="inputBox">
                <input
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  placeholder="0.0000"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="actionBox">
        <ul className="priceList">
          <li>
            <p className="key">Fee</p>
            <p className="value">0 USDT</p>
          </li>

          <li>
            <p className="key">Total</p>
            <p className="value">0 USDT</p>
          </li>
        </ul>

        <button className="sellBtn" onClick={() => {}} disabled={amount > 0 ? false : true}>
          <p className="able">Sell</p>

          <p className="disable">Place market order</p>
        </button>
      </div>
    </SpotLimitBox>
  );
}

const SpotLimitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  height: 100%;
  padding: 30px 30px 50px;
  overflow-y: scroll;

  .topBox {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .categoryList {
      display: flex;
      background: #000;
      border-radius: 6px;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border: 2px solid transparent;
        border-radius: inherit;
        opacity: 0.4;
        cursor: pointer;

        &.on {
          font-size: 16px;
          font-weight: 700;
          color: #ff5353;
          border-color: #ff5353;
          opacity: 1;
        }
      }
    }

    .setList {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 14px;

      li {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .key {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 20px;

          .title {
            font-weight: 500;
            color: rgba(255, 255, 255, 0.6);
          }

          .toggleBtn {
            display: flex;
            align-items: center;
            width: 44px;
            height: 20px;
            border-radius: 20px;
            background: rgba(193, 204, 248, 0.2);
            position: relative;

            &.on {
              span {
                margin: 0;
              }
            }

            span {
              width: 24px;
              aspect-ratio: 1;
              background: #5d667e;
              border-radius: 50%;
              box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
              margin: 0 0 0 20px;
              transition: 0.4s;
            }
          }
        }

        .value {
          display: flex;
          align-items: center;

          .inputBox {
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
            padding: 0 16px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid transparent;
            border-radius: 6px;

            &:hover {
              border-color: #fff;
            }

            input {
              flex: 1;
              width: 100%;
            }
          }

          .optBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            height: 40px;
            color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.16);
            border-radius: 6px;

            &:hover {
              color: #fff;
              background: rgba(255, 255, 255, 0.06);
            }
          }
        }
      }

      .or {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);

        .line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.14);
        }
      }
    }
  }

  .actionBox {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: #000;
    border-radius: 8px;

    .priceList {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 14px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;

        .key {
          opacity: 0.4;
        }

        .value {
          opacity: 0.6;
        }
      }
    }

    .sellBtn {
      height: 44px;
      background: #ff5353;
      border-radius: inherit;

      .able {
        display: inline-block;
      }

      .disable {
        display: none;
      }

      &:disabled {
        color: rgba(255, 255, 255, 0.2);
        background: #22262e;

        .able {
          display: none;
        }

        .disable {
          display: inline-block;
        }
      }
    }
  }
`;
