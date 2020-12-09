import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
          box-sizing:border-box;
          
    }
    body{
        background-color:#fff;
        margin:0px auto;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
