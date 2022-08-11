import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";


// TODO: 시안이 이미지라 상세한 스타일 정보가 없음. 수정 필요
const DepositProgressPopup = ({}) => {
    const [okCount, setOkCount] = useState(5);
    const [totalCount, setTotalCount] = useState(10);
    const [isComplete, setIsComplete] = useState(false);

    // useEffect(() => {
    //     let count = 0;
    //     const timer = setInterval(() => {
    //         setOkCount(count);
    //         count ++;
    //     }, 1000);

    //     if(count > 9){
    //         clearInterval(timer);
    //     }
            
        
    // }, []);

    return(
        <DepositProgressPopupBox className="defaultPopup" 
        // TODO: publishing용 이벤트. 추후 삭제 해야함
        onClick={() => setIsComplete(!isComplete)}
        >
            {!isComplete ? (
            <>
                <p className="titleBox">
                    {/* <img src="" alt="" /> */}
                    입금 처리 중
                </p>
                <p className="descBox">
                    {totalCount}회의 승인 이후 <strong className="strongBox">500 USDC</strong>의 입금이 가능합니다.
                </p>
                <p>
                    <progress value={okCount} min="0" max="10"/>
                </p>
                <p className="countBox">
                    {`승인 횟수: ${okCount}/${totalCount}`}
                </p>
            </>) : (
                <>
                    <p className="titleBox">
                        {/* <img src="" alt="" /> */}
                        입금 성공!
                    </p>
                    <p className="descBox">
                        <strong className="strongBox">500 USDC</strong>의 입금이 승인되었으며 지금부터 트레이딩이 가능합니다.
                    </p>
                </>
            )}
        </DepositProgressPopupBox>
    );
};

export default DepositProgressPopup;

const DepositProgressPopupBox = styled.div`
    width: 347px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 3px;

    background: linear-gradient(
      104.28deg,
      rgba(255, 255, 255, 0.1) 0.69%,
      rgba(0, 0, 104, 0.08) 113%
    );
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    // box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.2),
    //   inset 2px 2px 2px rgba(255, 255, 255, 0.2);

    .titleBox{
        padding-bottom: 10px;
    }

    & > p{
        height: 20px;
        width: 100%;

        progress {
            appearance: none;
            vertical-align: -0.8em;             // 세로 정렬 위치
            width: 100%;
        }
        
        progress::-webkit-progress-bar {
            border-radius:10px;
            box-shadow: inset 3px 3px 10px #262833;
            border: 1px solid black;
            background: linear-gradient(
                104.28deg,
                rgba(255, 255, 255, 0.1) 0.69%,
                rgba(0, 0, 104, 0.08) 113%
            );
            height: 6px;
        }
    
        progress::-webkit-progress-value {
            border-radius:10px;
            border: 1px solid #5963F9;
            box-shadow: inset 3px 3px 10px #262833;
            background: linear-gradient(
                104.28deg,
                rgba(255, 255, 255, 0.1) 0.69%,
                rgba(0, 0, 104, 0.08) 113%
            );
        }
    }

    .titleBox{
        font-family: 'Sarabun';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 18px;
        letter-spacing: 0.04em;

        height: 100%;
    }

    .strongBox{
        color: #fff !important;
        
    }

    .descBox{
        color: rgba(255,255,255,0.4);
        height: 100%;
    }

    .countBox{
        color: rgba(255,255,255,0.4);
        height: 100%;
    }
`;