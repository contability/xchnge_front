import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { io} from 'socket.io-client';
import { API } from "../../../configs/api";
import { getLocalStorage } from "../../../util/common";

const Orders = ({ symbol }) => {
    const [list, setList] = useState([]);
    const [socket, setSocket] = useState();

    const userName = getLocalStorage("userName")?.value;
    //////////////////// socketEvent
    // useEffect(() => {
    //     const socketio = io(URL, {
    //         query: `username=aaa`
    //     });
    //     setSocket(socketio);
    // },[]);

    // useEffect(() => {
    //     if(socket){
    //         socket.on('evaluate_result', (data) => {
    //             console.log(list);
    //             setList([]);
    //             console.log(data);
    //             let tempList = [];

    //             data.map((v, i) => {
    //                 const row = JSON.parse(v);
    //                 tempList.push(row);
    //             });

    //             setList([...tempList]);
                
    //         });
    //     }
    // }, [socket]);

    const getOrdersList = () => {
        axios.get(API.API_GET_ORDERS + `/${symbol}/0/100/price/DESC?filterkey=username&filterval=${userName}`)
        .then((res) => {
            console.log(res);
            if(res && res?.data?.list.length > 0){
                setList([...res.data.list]);    
            }
        })
        .catch(err => console.error(err));
    };

    useEffect(()=>{
        getOrdersList();
    }, [symbol]);
    
    return(
        <OrdersBox>
            <table>
                <colgroup>
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>marketsymbol</th>
                        <th>market</th>
                        <th>typestr</th>
                        <th>price</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((v, i)=>(
                    <tr key={i}>
                        <td>{v.marketsymbol}</td>
                        <td>{v.market}</td>
                        <td>{v.typestr}</td>
                        <td>{v.price}</td>
                        <td>{v.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </OrdersBox>
    );
};

const OrdersBox = styled.div`
    width: 100%;
    height: 100%;

    table{
        width: 100%;
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

export default Orders;