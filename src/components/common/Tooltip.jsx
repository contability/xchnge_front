import styled from "styled-components";

const Tooltip = ({off, desc}) => {

    return (
        <ToolTipBox>
            {desc}
        </ToolTipBox>
    );
};

const ToolTipBox = styled.div`
    position: absolute;
    top: 43px;
    right: 0;
    width: 342px;

    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 4px;

    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.8);

    padding: 12px;
    z-index: 10;
`;

export default Tooltip;