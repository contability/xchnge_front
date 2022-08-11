import styled from "styled-components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import DefaultHeader from "../../components/header/DefaultHeader";
import T_btc_usdt from "../../img/token/T_btc_usdt.png";
import I_dnPolWhite from "../../img/icon/I_dnPolWhite.svg";
import { useEffect, useState } from "react";
import { D_btmCategoryList, D_listCategoryList, D_marginSymbolList } from "../../data/D_trading";
import CopyrightFooter from "../../components/header/CopyrightFooter";
import Market from "../../components/trading/spot/Market";
import Book from "../../components/trading/spot/Book";
import Trades from "../../components/trading/spot/Trades";
import Limit from "../../components/trading/spot/Limit";
import SpotMarketBox from "../../components/trading/spot/SpotMarket";
import SpotCategoryPopup from "../../components/trading/spot/SpotCategoryPopup";
import PopupBg from "../../components/common/PopupBg";
import SpotLimit from "../../components/trading/spot/SpotLimit";
import DepositPopup from "../../components/trading/depositPopup/DepositPopup";
import DepositQrPopup from "../../components/trading/depositPopup/DepositQrPopup";
import DepositProgressPopup from "../../components/trading/depositPopup/DepositProgressPopup";
import WithdrawPopup from "../../components/trading/withdrawPopup/WithdrawPopup";
import WithdrawConfirmPopup from "../../components/trading/withdrawPopup/WithdrawConfirmPopup";
import Orders from "../../components/trading/spot/Orders";
// import TradeHistory from "../../components/trading/TradeHistory";
import SelSymbolListPopup from "../../components/trading/SelSymbolListPopup";
import MyPositions from "../../components/trading/margin/MyPositions";

export default function Trading() {
  const [btmCategory, setBtmCateogry] = useState(D_btmCategoryList[0]);
  const [listCategory, setListCateogry] = useState(D_listCategoryList[0]);
  const [actCategory, setActCateogry] = useState("Market");
  const [spotPopup, setSpotPopup] = useState(false);

  const [depositPopup, setDepositPopup] = useState(false);
  const [depositQrPopup, setDepositQrPopup] = useState(false);
  const [depositProgressPopup, setDepositProgressPopup] = useState(false);

  const [withdrawPopup, setWithdrawPopup] = useState(false);
  const [withdrawConfirmPopup, setWithdrawConfirmPopup] = useState(false);

  const [symbol, setSymbol] = useState({});
  const [symbolListPopup, setSymbolListPopup] = useState(false);

  
  useEffect(() => {
    setSymbol({...D_marginSymbolList[0]});
  }, []);

  return (
    <>
      <DefaultHeader />
      <TradingBox>
        <section className="innerBox">
          <article className="leftArea">
            <div className="chartCont">
              <div className="topBar">
                <div className="tokenBox">
                  <button className="selBtn" onClick={() => setSymbolListPopup(!symbolListPopup)} >
                    <img className="icon" src={T_btc_usdt} alt="" />
                    <strong>{symbol.title}</strong>
                    <img className="arw" src={I_dnPolWhite} alt="" />
                  </button>
                  {symbolListPopup && (
                    <>
                      <SelSymbolListPopup off={setSymbolListPopup} list={D_marginSymbolList} setCont={setSymbol}/>
                      <PopupBg off={setSymbolListPopup} cursor={false}/>
                    </>
                  )}
                </div>

                <span className="bar" />

                <div className="infoBox">
                  <strong className="price">30484</strong>

                  <ul className="infoList">
                    <li>
                      <p className="key">Mark</p>
                      <div className="value">
                        {(30515).toLocaleString("eu", "US")}
                      </div>
                    </li>
                    <li>
                      <p className="key">Index</p>
                      <div className="value">
                        {(30515).toLocaleString("eu", "US")}
                      </div>
                    </li>
                    <li>
                      <p className="key">Funding</p>
                      <div className="value green">0.0093%</div>
                    </li>
                    <li>
                      <p className="key">24h Change</p>
                      <div className="value green">{`${12} +${0.04}%`}</div>
                    </li>
                    <li>
                      <p className="key">24h High</p>
                      <div className="value">
                        {(30515).toLocaleString("eu", "US")}
                      </div>
                    </li>
                    <li>
                      <p className="key">24h Low</p>
                      <div className="value">
                        {(30515).toLocaleString("eu", "US")}
                      </div>
                    </li>
                    <li>
                      <p className="key">24h Volume(BTC)</p>
                      <div className="value">
                        {(30515).toLocaleString("eu", "US")}
                      </div>
                    </li>
                    <li>
                      <p className="key">24h Volume(USDT)</p>
                      <div className="value">
                        {(27831840.45).toLocaleString("eu", "US")}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="chartBox">
                <TradingViewWidget
                  symbol={symbol.id || ""}
                  theme={Themes.DARK}
                  locale={"en"}
                  hideSideToolbar={true}
                  autosize={true}
                />
              </div>
            </div>

            <div className="bottomBox">
              <ul className="categoryList">
                {D_btmCategoryList.map((v, i) => (
                  <li
                    key={i}
                    className={`${btmCategory === v && "on"}`}
                    onClick={() => setBtmCateogry(v)}
                  >
                    {v}
                  </li>
                ))}
              </ul>

              <div className="contBox">
                {btmCategory === "My Positions" && <MyPositions/>}
                {/* {btmCategory === "Recent Trade History" && <TradeHistory/>} */}
                {/* {btmCategory === "Open Orders" && <Orders/>} */}
                {/* {btmCategory === "Balances" && <Orders/>} */}
                {/* {btmCategory === "Fee Discounts" && <Orders/>} */}
              </div>
            </div>
          </article>

          <article className="listArea">
            <ul className="listCategoryList">
              {D_listCategoryList.map((v, i) => (
                <li key={i} className={`${listCategory === v && "on"}`}>
                  <button onClick={() => setListCateogry(v)}>{v}</button>
                </li>
              ))}
            </ul>

            {listCategory === D_listCategoryList[0] && <Book />}
            {listCategory === D_listCategoryList[1] && <Trades />}
          </article>

          <article className="actArea">
            <ul className="actCategoryList">
              <li className={`${actCategory === "Market" && "on"}`}>
                <button onClick={() => setActCateogry("Market")}>
                  <p>Market</p>
                </button>
              </li>
              <li className={`${actCategory === "Limit" && "on"}`}>
                <button onClick={() => setActCateogry("Limit")}>
                  <p>Limit</p>
                </button>
              </li>
              <li
                className={`${actCategory.indexOf("Spot") !== -1 && "on"} ${
                  spotPopup && "open"
                }`}
              >
                <button onClick={() => setSpotPopup(true)}>
                  <p>Spot</p>

                  <img src={I_dnPolWhite} alt="" />
                </button>

                {spotPopup && (
                  <>
                    <SpotCategoryPopup
                      off={setSpotPopup}
                      cont={actCategory}
                      setCont={setActCateogry}
                    />
                    <PopupBg off={setSpotPopup} />
                  </>
                )}
              </li>
            </ul>

            <div className="contBox">
              {actCategory === "Market" && <Market symbol={symbol}/>}
              {actCategory === "Limit" && <Limit />}
              {actCategory === "Spot Limit" && <SpotLimit />}
              {actCategory === "Spot Market" && <SpotMarketBox />}
            </div>

            <div className="accountBox">
              <p className="title">Account</p>

              <ul className="accountList">
                <li>
                  <p className="key">Buying Power</p>
                  <p className="value">$0.00</p>
                </li>
                <li>
                  <p className="key">Equity</p>
                  <p className="value">$0.00</p>
                </li>
                <li>
                  <p className="key">Margin Usage</p>
                  <p className="value">0.00%</p>
                </li>
                <li>
                  <p className="key">Account Leverage</p>
                  <p className="value">0.00%</p>
                </li>
              </ul>

              <div className="btnBox">
                <button
                  className="depositBtn"
                  onClick={() => setDepositPopup(true)}
                >
                  Deposit
                </button>

                <button className="withDrawBtn" onClick={() => setWithdrawPopup(true)}>
                  Withdraw
                </button>
              </div>
            </div>
          </article>
        </section>
      </TradingBox>

      <CopyrightFooter />
      {depositPopup && (
        <>
          <DepositPopup off={setDepositPopup} nextCont={setDepositQrPopup}/>
          <PopupBg off={setDepositPopup} />
        </>
      )}

      {depositQrPopup && (
        <>
          <DepositQrPopup off={setDepositQrPopup} progressPopup={setDepositProgressPopup}/>
          <PopupBg off={setDepositQrPopup}/>
        </>
      )}

      {depositProgressPopup && (
        <>
          <DepositProgressPopup/>
          <PopupBg off={setDepositProgressPopup}/>
        </>
      )}

      {withdrawPopup && (
        <>
          <WithdrawPopup off={setWithdrawPopup} nextCont={setWithdrawConfirmPopup}/>
          <PopupBg off={setWithdrawPopup}/>
        </>
      )}

      {withdrawConfirmPopup && (
        <>
          <WithdrawConfirmPopup off={setWithdrawConfirmPopup}/>
          <PopupBg off={setWithdrawConfirmPopup}/>
        </>
      )}
    </>
  );
}

const TradingBox = styled.main`
  height: 100vh;
  padding: 72px 0 34px;
  color: #fff;
  background: #0a0e17;

  .innerBox {
    display: flex;
    height: 100%;
    border-top: 1px solid #3b3e45;

    .leftArea {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .chartCont {
        flex: 1;
        display: flex;
        flex-direction: column;

        .topBar {
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid #3b3e45;

          .tokenBox {
            position: relative;
            .selBtn {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              width: 220px;

              .icon {
                height: 34px;
              }

              .arw {
                width: 12px;
              }
            }
          }

          .bar {
            width: 1px;
            height: 26px;
            background: #fff;
            opacity: 0.2;
          }

          .infoBox {
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 0 30px;
            overflow: hidden;

            .price {
              font-size: 22px;
              color: #3fb68b;
            }

            .infoList {
              flex: 1;
              display: flex;
              align-items: center;
              gap: 30px;
              overflow-x: scroll;

              li {
                display: flex;
                flex-direction: column;
                gap: 2px;
                font-weight: 600;

                .key {
                  font-size: 12px;
                  color: #7a7a7a;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }

                .value {
                  font-size: 14px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;

                  &.green {
                    color: #3fb68b;
                  }
                }
              }
            }
          }
        }

        .chartBox {
          flex: 1;
          z-index: 0;

          &:first-child{
            z-index: 0;
          }
        }
      }

      .bottomBox {
        display: flex;
        flex-direction: column;
        height: 284px;
        border-top: 1px solid #3b3e45;

        .categoryList {
          display: flex;
          align-items: center;
          height: 44px;

          li {
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 6px;
            color: rgba(255, 255, 255, 0.4);
            cursor: pointer;

            &.on {
              height: 36px;
              color: #fff;
              background: rgba(255, 255, 255, 0.1);
            }
          }
        }

        .contBox {
          flex: 1;
          border-top: 1px solid #3b3e45;
        }
      }
    }

    .listArea {
      display: flex;
      flex-direction: column;
      width: 320px;
      min-width: 320px;
      border-left: 1px solid #3b3e45;

      .listCategoryList {
        display: flex;
        height: 50px;
        border-bottom: 1px solid #3b3e45;

        li {
          flex: 1;
          padding: 4px;
          color: rgba(255, 255, 255, 0.4);

          &:hover {
            color: #fff;
          }

          &.on {
            color: #fff;

            button {
              background: rgba(255, 255, 255, 0.1);
            }
          }

          button {
            width: 100%;
            height: 100%;
            border-radius: 6px;
          }
        }
      }
    }

    .actArea {
      display: flex;
      flex-direction: column;
      width: 320px;
      min-width: 320px;
      border-left: 1px solid #3b3e45;

      .actCategoryList {
        display: flex;
        height: 50px;
        border-bottom: 1px solid #3b3e45;

        & > li {
          flex: 1;
          padding: 4px;
          color: rgba(255, 255, 255, 0.4);
          position: relative;

          &:hover {
            color: #fff;
          }

          &.on {
            color: #fff;

            button {
              background: rgba(255, 255, 255, 0.1);
            }
          }

          &.open {
            img {
              transform: rotate(180deg);
            }
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            width: 100%;
            height: 100%;
            border-radius: 6px;

            img {
              width: 12px;
            }
          }
        }
      }

      .contBox {
        flex: 1;
        overflow: hidden;
      }

      .accountBox {
        padding: 30px;
        border-top: 1px solid #3b3e45;
        font-size: 14px;
        font-weight: 500;

        .accountList {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px 14px;
          margin: 10px 0 0;
          background: #000;
          border-radius: 8px;

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .key {
              opacity: 0.4;
            }

            .value {
            }
          }
        }

        .btnBox {
          display: flex;
          gap: 12px;
          margin: 20px 0 0 0;

          button {
            flex: 1;
            height: 40px;
            background: linear-gradient(
              114.85deg,
              rgba(189, 203, 230, 0.3) 20.53%,
              rgba(189, 203, 230, 0) 104.02%
            );
            border-radius: 8px;
            position: relative;

            &:hover {
              background: linear-gradient(
                114.85deg,
                #bdcbe6 20.53%,
                rgba(189, 203, 230, 0) 104.02%
              );
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
              mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              position: absolute;
              inset: 0;
            }
          }
        }
      }
    }
  }
`;
