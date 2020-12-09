import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        font-size: 14px;
        font-weight: 500;
    }
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        margin-top: 2rem;
    }
`;

const ScrollBox = styled.div`
    background-color: ${props => (props.consulting ? props.theme.lightBlueColor : "#c2c2c2")};
    width: 3rem;
    height: 1.2rem;
    position: relative;
    border-radius: 20px;
    margin-right: 2rem;
    cursor: pointer;
`;

const Dot = styled.div`
    background-color: ${props => (props.consulting ? props.theme.blueColor : "#fff")};
    border-radius: 70%;
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    top: -1px;
    box-shadow: 0 1px 5px 0 rgba(170, 170, 170, 0.7);
    left: ${props => (props.consulting ? "1.6rem" : 0)};

    transition: all 0.2s ease-in-out;
`;
const ToggleBtn = ({ consulting, setConsulting }) => {
    return (
        <Wrapper>
            <ScrollBox consulting={consulting} onClick={() => setConsulting(!consulting)}>
                <Dot consulting={consulting} />
            </ScrollBox>
            <span>상담 중인 요청만 보기</span>
        </Wrapper>
    );
};

export default ToggleBtn;
