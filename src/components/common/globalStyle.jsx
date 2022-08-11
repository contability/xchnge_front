import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    &::-webkit-scrollbar {
      display: none;
    }
  }

  *{
    padding:0;
    margin:0;
    font-family: 'Sarabun', sans-serif;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
  
  body{

  }
  
  u{
    text-decoration: underline;
  }
  
  *:link,
  *:visited{
    color:unset;
  }

  *:disabled {
    cursor: not-allowed;
  }
  
  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  *:focus{
    outline:none;
  }
  
  input{
    min-width: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    background: unset;
    outline: none;
    user-select: auto;

    &::placeholder{
      color: rgba(255, 255, 255, 0.2);
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  textarea{
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    
    &::placeholder{
      color:#D0D0D0;
    }
  }


  label,
  summary{
    cursor: pointer;
  }

  button{
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    font-weight: inherit;
    background: none;
    cursor: pointer;
  }

  textarea{
    resize: none;
    user-select:auto;
  }

  &#BroadBox {
    background: #373737;
  }

  .nospace{
    width: 0;
    height: 0;
    position: absolute;
  }

  
  .posBox{
    position: relative;
  }
  
  
  //custom 
  
  .defaultPopup {
    color: #fff;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 6;
  }

  .bgArea {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      104.28deg,
      rgba(255, 255, 255, 0.1) 0.69%,
      rgba(0, 0, 104, 0.08) 113%
    );
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.2),
      inset 2px 2px 2px rgba(255, 255, 255, 0.2);
    position: absolute;
    z-index: -1;
  }

  .datePickerHeader{
    display: flex;
    align-items: center;
    gap: 20px;
    height: 34px;
    padding: 0 26px;

    p{
      flex:1;
      font-size: 16px;
      text-align: start;
    }

  }
  
  #CustomToast {
    padding: 0 22px;
  }

  
`;

export default GlobalStyle;
