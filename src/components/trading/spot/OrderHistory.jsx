import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../configs/api";
import { getLocalStorage } from "../../../util/common";

const OrderHistory = () => {
    const [list, setList] = useState([]);
    const userName = getLocalStorage("userName")?.value;

    const getOrderHistoryList = () => {
        axios.get(API.API_GET_LOGFILLS + `/${userName}/0/100/updatedat/DESC`)
        .then((res) => {
            console.log(res);
            if(res && res.data.list?.length > 0){
                setList([...res.data.list]);
            }
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
        getOrderHistoryList();
    }, []);
    
    return(
        <OrderHistoryBox>
            <table>
                <colgroup>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                </colgroup>
                <thead>
                    <tr>
                    <th>market</th>
                    <th>asset</th>
                    <th>sellerusername</th>
                    <th>buyerusername</th>
                    <th>price</th>
                    <th>amountbase0</th>
                    <th>amountbase1</th>
                    <th>amountfloat0</th>
                    <th>amountfloat1</th>
                    <th>matchbase</th>
                    <th>matchfloat</th>
                    <th>updatedat</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((v, i)=>(
                    <tr key={i}>
                        <td>{v.market}</td>
                        <td>{v.asset}</td>
                        <td>{v.sellerusername}</td>
                        <td>{v.buyerusername}</td>
                        <td>{v.price}</td>
                        <td>{v.amountbase0}</td>
                        <td>{v.amountbase1}</td>
                        <td>{v.amountfloat0}</td>
                        <td>{v.amountfloat1}</td>
                        <td>{v.matchbase}</td>
                        <td>{v.matchfloat}</td>
                        <td>{moment(v.updatedat).format("YYYYMMDD HH:mm:ss")}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </OrderHistoryBox>
    );
};

const OrderHistoryBox = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    table{
        thead{
            th{
                font-family: 'Sarabun';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;
                color: rgba(255, 255, 255, 0.6);
                padding-bottom: 10px;
            }
        }
        tbody{
            td{
                text-align: center;
                font-size: 14px;

                &:nth-child(8){
                    color: #EF3A41;
                }
            }

            
        }
    }
`;

export default OrderHistory;