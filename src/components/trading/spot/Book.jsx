import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../configs/api";
import { D_bookList, D_bookHeaderList } from "../../../data/D_trading";

export default function Book({ symbol }) {
  const [list, setList] = useState([]);
  const getOrdersList = () => {
    console.log(API.API_GET_ORDERS + `/${symbol}/0/100/price/DESC`);
    axios.get(API.API_GET_ORDERS + `/${symbol}/0/100/price/DESC`)
    .then((res) => {
      setList([]);
      console.log(res);
      if(res && res.data?.list?.length > 0){
        setList([...res.data.list]);
      }
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    getOrdersList();
  }, [symbol]);

  return (
    <BookBox>
      <ul className="listHeader">
        {D_bookHeaderList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <ul className="list">
        {/* {D_bookList.map((v, i) => { */}
        {list.map((v, i) => {
          return (
            <Fragment key={i}>
              <li >
                <span>
                  {/* <p>{v.size.toFixed(1)}</p> */}
                  <p>{parseFloat(v.amount).toFixed(1)}</p>
                  <div
                    className="fill"
                    style={{ width: `${(parseFloat(v.amount) / parseFloat(v.price)) * 100}%` }}
                  />
                </span>
                <span>
                  <p className={v.supertype === "sell" ? "sell" : "buy"}>{v.price}</p>
                </span>
                <span>
                  {/* <p>{v.sum}</p> */}
                  <p>{v.sum || "0"}</p>
                </span>
              </li>

              {((D_bookList.length < 38 && i === D_bookList.length - 1) ||
                i === 38) && <div className="rate">0.911</div>}
            </Fragment>
          );
        })}
      </ul>
    </BookBox>
  );
}

const BookBox = styled.div`
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

        .sell{ 
          color: #e35e5e;
        }

        .buy{
          color: #2ead65;
        }

        .fill {
          height: 100%;
          background: rgba(255, 83, 83, 0.2);
          top: 0;
          left: 0;
          position: absolute;
        }
      }
    }

    .rate {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 34px;
      font-size: 16px;
      font-weight: 700;
      color: #3fb68b;
      border-top: 1px solid #3b3e45;
      border-bottom: 1px solid #3b3e45;
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
