import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../configs/api";
import { getLocalStorage } from "../../../util/common";

const TradeHistory = () => {
    const [list, setList] = useState([]);
    const userName = getLocalStorage("userName").value;
    useEffect(() => {
        axios.get(API.API_GET_MARGIN_POSITIONS_LOG + `/${userName}`)
        .then((res) => {
            if(res && res.data.data?.length > 0){
                console.log(res.data.data);
                setList([...res.data.data]);
            }
        })
        .catch(err => console.error(err));
    }, []);
    
    return(
        <TradeHistoryBox>
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
                    <th>leveragefactor</th>
                    <th>leveragemargin</th>
                    <th>marketasset</th>
                    <th>assetsymbol0</th>
                    <th>assetsymbol1</th>
                    <th>openprice</th>
                    <th>opencollateralamount</th>
                    <th>longshort</th>
                    <th>liquidationprice</th>
                    <th>openamount0</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((v, i)=>(
                    <tr key={i}>
                        <td>{v.leveragefactor}</td>
                        <td>{v.leveragemargin}</td>
                        <td>{v.marketasset}</td>
                        <td>{v.assetsymbol0}</td>
                        <td>{v.assetsymbol1}</td>
                        <td>{v.openprice}</td>
                        <td>{v.opencollateralamount}</td>
                        <td>{v.islongshort === 1 ? "short" : "long"}</td>
                        <td>{v.liquidationprice}</td>
                        <td>{v.openamount0}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </TradeHistoryBox>
    );
};

const TradeHistoryBox = styled.div`
    width: 100%;
    height: 100%;

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

export default TradeHistory;