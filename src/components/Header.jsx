import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.primaryBlueColor};
    position: absolute;
    align-items: center;
    top: 0;
    height: 70px;
`;

const TitleBox = styled.div`
    margin-left: 2rem;
`;

const Title = styled.span`
    color: white;
    font-size: 1.5rem;
    font-weight: ${props => props.theme.bold};
`;

const BtnBox = styled.div`
    padding: 1rem;
`;

const Btn = styled.span`
    font-weight: ${props => props.theme.buttonFontWeight};
    color: white;
    cursor: pointer;
    &:first-child {
        border-right: 3px solid #fff;
        padding-right: 1rem;
    }
    &:last-child {
        margin-left: 1rem;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <TitleBox>
                <Title>CAPA 파트너스</Title>
            </TitleBox>
            <BtnBox>
                <Btn>A 가공업체</Btn>
                <Btn>로그아웃</Btn>
            </BtnBox>
        </Wrapper>
    );
};

export default Header;
