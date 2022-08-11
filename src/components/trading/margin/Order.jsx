import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { API } from "../../../configs/api";
import { D_limitCategoryDetailList, D_marginCategoryList, D_marketCateogryList } from "../../../data/D_trading";
import { getLocalStorage } from "../../../util/common";
import Tooltip from "../../common/Tooltip";

export default function Order({ symbol, getList }) {
  const [category, setCategory] = useState(D_marginCategoryList[0]);
  const [limitCategory, setLimitCategory] = useState(D_limitCategoryDetailList[0].key);

  // const [toolTip, setToolTip] = useState(false);
  // const [toolTipDesc, setToolTipDesc] = useState("");
  // const [targetToolTip, setTargetToolTip] = useState("");

  const [amount, setAmount] = useState("");

  const [toggleLeverage, setToggleLeverage] = useState(false);
  const [leverage, setLeverage] = useState(0);  //leveragefactor

  const [profit, setProfit] = useState(0);
  const [toggleProfit, setToggleProfit] = useState(false);

  const [loss, setLoss] = useState(0);
  const [toggleLoss, setToggleLoss] = useState(false);
  
  const userName = getLocalStorage("userName")?.value;

  // useEffect(() => {
  // }, []);

  const order = () => {
    axios
    .post(API.API_POST_MARGINPOSITIONS, {
      leveragefactor: leverage,
      assetsymbol0: "USDT",
      assetsymbol1: symbol.assetSymbol,
      username: userName,
      islongshort : category === "Long" ? 2 : 1,
      isisolatedorcross: limitCategory === "Isolated" ? 1 : 2,
      market: `MARGIN_${symbol.title}`,
      stopprice: loss,
      takeprice: profit,
      openamount1: amount,

    })
    .then((res) => {
      console.log(res);
    })
    .catch(err => console.error(err));
  };

  // const hoverEventHandler = (currentCategory, e) => {
  //   const isEnter = e.type === "mouseenter" ? true : false;
  //   setToolTip(isEnter);
  //   setTargetToolTip(e.target.innterHTML);

  //   if(limitCategory === currentCategory.key && currentCategory.key === e.target.innerHTML){
  //     setToolTipDesc(currentCategory.desc);
  //   }
  // };

  return (
    <OrderBox leverage={leverage} className={`${category === "Long" && "long"}`} profitLeverage={profit} lossLeverage={loss}>
      <div className="topBox">
      <ul className="limitCategoryList">
          {D_limitCategoryDetailList.map((v, i) => (
            <li
              key={i}
              className={`${limitCategory === v.key && "on"}`}
              onClick={() => setLimitCategory(v.key)}
              // onMouseEnter={(e)=>hoverEventHandler(v, e)}
              // onMouseLeave={(e)=>hoverEventHandler(v, e)}
            >
              {v.key}
              {/* {v.key === targetToolTip && toolTip && (
                <Tooltip off={setLimitCategory} desc={toolTipDesc}/>
              )} */}
            </li>
          ))}
        </ul>
        <ul className="categoryList">
          {D_marginCategoryList.map((v, i) => (
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

          <div className="or">
            <div className="line" />
            <p>or</p>
            <div className="line" />
          </div>

          <li className="leverageBox">
            <div className="key">
              <p className="title">Leverage</p>

              <button
                className={`${toggleLeverage && "on"} toggleBtn`}
                onClick={() => setToggleLeverage(!toggleLeverage)}
              >
                <span />
              </button>
            </div>

            <div className="value">
              {toggleLeverage ? (
                <>
                  <input
                    className={`rangeInput`}
                    type={"range"}
                    value={leverage}
                    onChange={(e) => {
                      setLeverage(e.target.value);
                    }}
                    min="0"
                    max="100"
                    step="1"
                    placeholder=""
                  />

                  <p className={`${category === "Long" ? "long" : ""}rangeLabel`}>{leverage}%</p>
                </>
              ) : (
                <>
                  <div className="inputBox">
                    <input
                      value={leverage}
                      onChange={(e) => 
                        setLeverage(e.target.value)
                      }
                      placeholder="0.00x"
                    />
                  </div>

                  <button
                    className={`${leverage === 2 && "on"} optBtn`}
                    onClick={() => 
                      setLeverage(2)
                    }
                  >
                    2x
                  </button>

                  <button
                    className={`${leverage === 5 && "on"} optBtn`}
                    onClick={() => 
                      setLeverage(5)
                    }
                  >
                    5x
                  </button>

                  <button
                    className={`${leverage === 10 && "on"} optBtn`}
                    onClick={() => 
                      setLeverage(10)
                    }
                  >
                    10x
                  </button>
                </>
              )}
            </div>
          </li>

          <li className="profitLeverageBox">
            <div className="key">
              <p className="title">Take Profit</p>

              <button
                className={`${toggleProfit && "on"} toggleBtn`}
                onClick={() => setToggleProfit(!toggleProfit)}
              >
                <span />
              </button>
            </div>

            <div className="value">
              {toggleProfit ? (
                <>
                  <input
                    className={`rangeInput`}
                    type={"range"}
                    value={profit}
                    onChange={(e) => {
                      setProfit(e.target.value);
                    }}
                    min="0"
                    max="100"
                    step="1"
                    placeholder=""
                  />

                  <p className={`profitRangeLabel`}>{profit}%</p>
                </>
              ) : (
                <>
                  <div className="inputBox">
                    <input
                      value={profit}
                      onChange={(e) => setProfit(e.target.value)}
                      placeholder="0.00x"
                    />
                  </div>

                  <button
                    className={`${profit === 2 && "on"} optBtn`}
                    onClick={() => setProfit(2)}
                  >
                    2x
                  </button>

                  <button
                    className={`${profit === 5 && "on"} optBtn`}
                    onClick={() => setProfit(5)}
                  >
                    5x
                  </button>

                  <button
                    className={`${profit === 10 && "on"} optBtn`}
                    onClick={() => setProfit(10)}
                  >
                    10x
                  </button>
                </>
              )}
            </div>
          </li>
          
          <li className="lossLeverageBox">
            <div className="key">
              <p className="title">Stop Loss</p>

              <button
                className={`${toggleLoss && "on"} toggleBtn`}
                onClick={() => setToggleLoss(!toggleLoss)}
              >
                <span />
              </button>
            </div>

            <div className="value">
              {toggleLoss ? (
                <>
                  <input
                    className={`rangeInput`}
                    type={"range"}
                    value={loss}
                    onChange={(e) => {
                      setLoss(e.target.value);
                    }}
                    min="0"
                    max="100"
                    step="1"
                    placeholder=""
                  />

                  <p className={`lossRangeLabel`}>{loss}%</p>
                </>
              ) : (
                <>
                  <div className="inputBox">
                    <input
                      value={loss}
                      onChange={(e) => setLoss(e.target.value)}
                      placeholder="0.00x"
                    />
                  </div>

                  <button
                    className={`${loss === 2 && "on"} optBtn`}
                    onClick={() => setLoss(2)}
                  >
                    2x
                  </button>

                  <button
                    className={`${loss === 5 && "on"} optBtn`}
                    onClick={() => setLoss(5)}
                  >
                    5x
                  </button>

                  <button
                    className={`${loss === 10 && "on"} optBtn`}
                    onClick={() => setLoss(10)}
                  >
                    10x
                  </button>
                </>
              )}
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

        <button className="actionBtn" onClick={order} disabled={amount > 0 ? false : true}>
          <p className="able">
            {category}
          </p>

          <p className="disable">Place market order</p>
        </button>
      </div>
    </OrderBox>
  );
}

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  height: 100%;
  padding: 30px 30px 50px;
  overflow-y: scroll;

  &.long {
    .topBox {
      .categoryList {
        li {
          &.on {
            color: #3fb68b;
            border-color: #3fb68b;
          }
        }
      }

      .limitCategoryList {
        display: flex;
        background: #000;
        border-radius: 6px;
        z-index: 10;
  
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
          position: relative;
  
          &.on {
            font-size: 16px;
            font-weight: 700;
            color: #fff;
            border-color: #fff;
            opacity: 1;
          }
        }
      }

      .setList {
        li {
          &.leverageBox {
            .value {
              .rangeInput {
                cursor: grab;
                direction: ltr;
                background: linear-gradient(
                  270deg,
                  #3fb68b 0%,
                  rgba(63, 182, 139, 0) 100%
                );

                &::-webkit-slider-thumb {
                  background: rgba(
                    59,
                    169,
                    130,
                    ${(props) => props.leverage / 100}
                  );
                  border: 1px solid
                    rgba(63, 182, 139, ${(props) => 1 - props.leverage / 100});
                  border-radius: 50%;
                  box-shadow: 0px 0px 6px
                    rgba(63, 182, 139, ${(props) => 1 - props.leverage / 100});
                }
              }

              .longrangeLabel {
                height: 20px;
                padding: 0 4px;
                font-size: 12px;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.6);
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                top: 36px;
                left: ${(props) => props.leverage}%;
                position: absolute;
                transform: translate(-50%, 0);
              }
            }
          }
        }
      }
    }

    .actionBox {
      .actionBtn {
        background: #3fb68b;
      }
    }
  }
  ///////////////////////////////////////////////////////////// end .long

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
        position: relative;

        &.on {
          font-size: 16px;
          font-weight: 700;
          color: #ff5353;
          border-color: #ff5353;
          opacity: 1;
        }
      }
    }

    .limitCategoryList {
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
          color: #fff;
          border-color: #fff;
          opacity: 1;
        }
      }
    }

    .setList {
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-size: 14px;

      li {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &.leverageBox {
          .value {
            gap: 8px;
            position: relative;

            .rangeInput {
              cursor: grab;
              direction: ltr;
              -webkit-appearance: none;
              width: 100%;
              height: 4px;
              margin: 20px 0;
              background: linear-gradient(
                270deg,
                #ff5353 0%,
                rgba(255, 83, 83, 0) 100%
              );
              border-radius: 8px;

              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 14px;
                aspect-ratio: 1;
                background: rgba(
                  235,
                  77,
                  78,
                  ${(props) => props.leverage / 100}
                );
                border: 1px solid
                  rgba(255, 83, 83, ${(props) => 1 - props.leverage / 100});
                border-radius: 50%;
                box-shadow: 0px 0px 6px
                  rgba(255, 83, 83, ${(props) => 1 - props.leverage / 100});
              }
            }

            .rangeLabel {
              height: 20px;
              padding: 0 4px;
              font-size: 12px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.6);
              background: rgba(255, 255, 255, 0.2);
              border-radius: 2px;
              top: 36px;
              left: ${(props) => props.leverage}%;
              position: absolute;
              transform: translate(-50%, 0);
            }
          }
        }

        &.profitLeverageBox {
          .value {
            gap: 8px;
            position: relative;

            .rangeInput {
              cursor: grab;
              direction: ltr;
              -webkit-appearance: none;
              width: 100%;
              height: 4px;
              margin: 20px 0;
              background: linear-gradient(
                270deg,
                #1F35FF 0%,
                rgba(255, 83, 83, 0) 100%
              );
              border-radius: 8px;

              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 14px;
                aspect-ratio: 1;
                background: rgba(
                  31,
                  53,
                  255,
                  ${(props) => props.profitLeverage / 100}
                );
                border: 1px solid
                  rgba(31, 53, 255, ${(props) => 1 - props.profitLeverage / 100});
                border-radius: 50%;
                box-shadow: 0px 0px 6px
                  rgba(31, 53, 255, ${(props) => 1 - props.profitLeverage / 100});
              }
            }

            .profitRangeLabel {
              height: 20px;
              padding: 0 4px;
              font-size: 12px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.6);
              background: rgba(255, 255, 255, 0.2);
              border-radius: 2px;
              top: 36px;
              left: ${(props) => props.profitLeverage}%;
              position: absolute;
              transform: translate(-50%, 0);
            }
          }
        }

        &.lossLeverageBox {
          .value {
            gap: 8px;
            position: relative;

            .rangeInput {
              cursor: grab;
              direction: ltr;
              -webkit-appearance: none;
              width: 100%;
              height: 4px;
              margin: 20px 0;
              background: linear-gradient(
                270deg,
                #1F35FF 0%,
                rgba(255, 83, 83, 0) 100%
              );
              border-radius: 8px;

              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 14px;
                aspect-ratio: 1;
                background: rgba(
                  31,
                  53,
                  255,
                  ${(props) => props.lossLeverage / 100}
                );
                border: 1px solid
                  rgba(20, 15, 208, ${(props) => 1 - props.lossLeverage / 100});
                border-radius: 50%;
                box-shadow: 0px 0px 6px
                  rgba(
                    31,
                    53,
                    255,
                    ${(props) => 1 - props.lossLeverage / 100});
              }
            }

            .lossRangeLabel {
              height: 20px;
              padding: 0 4px;
              font-size: 12px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.6);
              background: rgba(255, 255, 255, 0.2);
              border-radius: 2px;
              top: 36px;
              left: ${(props) => props.lossLeverage}%;
              position: absolute;
              transform: translate(-50%, 0);
            }
          }
        }

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
            transition: 0.4s;

            &.on {
              background: rgba(193, 204, 248, 0.6);

              span {
                margin: 0 0 0 20px;
                background: #eaeeff;
              }
            }

            span {
              width: 24px;
              aspect-ratio: 1;
              background: #5d667e;
              border-radius: 50%;
              box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
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

    .actionBtn {
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
        background: #22262E;

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
