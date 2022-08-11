import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { io} from 'socket.io-client';
import { getLocalStorage } from "../../../util/common";
import { API, URL } from "../../../configs/api";

const MyPositions = () => {
    const [list, setList] = useState([]);
    const [socket, setSocket] = useState();
    const userName = getLocalStorage("userName")?.value;

    const onClickClose = (row) => {
        axios.post(API.API_POST_DELETE_POSITION, {
            uuid: row.positionuuid,
            username: row.username
        })
        .then(({data})=>{
            if(data.status === "OK"){
                getMyPositionList();
            }
        })
        .catch(err => console.error(err));
    };

    const getMyPositionList = () => {
        axios.get(API.API_GET_EVALUATE + `/${userName}/0/3/id/DESC`)
        .then((res) => {
            console.log(res);
            if(res && res.data.list?.length > 0){
                setList([...res.data.list]);
            }
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
        getMyPositionList();

        const socketio = io(URL, {
            query: `username=aaa`
        });

        setSocket(socketio);
    },[]);

    useEffect(() => {
        if(socket){
            socket.on('evaluate_result', (data) => {
                console.log(list);
                setList([]);
                let tempList = [];

                data.map((v, i) => {
                    const row = JSON.parse(v);
                    tempList.push(row);
                });
                
                setList([...tempList]);
            });
        }
    }, [socket]);
    
    return(
        <MyPositionsBox>
            <table>
                <colgroup>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="*"/>
                    <col width="10%"/>
                    <col width="10%"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>assetsymbol</th>
                        <th>deltaprice</th>
                        <th>islongshort</th>
                        <th>latesttickerprice</th>
                        <th>liquidationprice</th>
                        <th>opentickerprice</th>
                        <th>profitloss</th>
                        <th>profitlossamount</th>
                        <th>usercollateralamount</th>
                        <th>
                            <button>
                                Close All
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {list.map((v, i)=>(
                    <tr key={i}>
                        <td>{v.assetsymbol}</td>
                        <td>{v.deltaprice}</td>
                        <td>{v.islongshort === 1 ? "short" : "long"}</td>
                        <td>{v.latesttickerprice}</td>
                        <td>{v.liquidationprice}</td>
                        <td>{v.opentickerprice}</td>
                        <td>{v.profitloss}</td>
                        <td>{v.profitlossamount}</td>
                        <td>{v.usercollateralamount}</td>
                        <td>
                            <button onClick={() => onClickClose(v)}>
                                Close
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </MyPositionsBox>
    );
};

const MyPositionsBox = styled.div`
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

                &:nth-child(3){
                    color: #EF3A41;
                }
            }

            
        }
    }
`;

export default MyPositions;