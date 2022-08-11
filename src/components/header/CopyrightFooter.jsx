import styled from "styled-components";

export default function CopyrightFooter() {
  return (
    <CopyrightFooterBox>
      <p className="copyright">© Defi, 2022. All rights reserved.</p>
    </CopyrightFooterBox>
  );
}

const CopyrightFooterBox = styled.footer`
  display: flex;
  align-items: center;
  height: 34px;
  padding: 0 30px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid #3b3e45;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
`;
