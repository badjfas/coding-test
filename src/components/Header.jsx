import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Home/Drawer";
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.primaryBlueColor};
    position: absolute;
    align-items: center;
    top: 0;
    height: 70px;
    z-index: 8000;
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        height: 44px;
    }
`;

const TitleBox = styled.div`
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        display: none;
    }
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        height: 44px;
        margin-left: 0.3rem;

        button {
            display: flex;
            background-color: transparent;
            border: none;
            font-size: 1.5rem;
            svg {
                display: flex;
                color: white;
            }
        }
    }
`;

const Title = styled.div`
    color: white;
    font-size: 1.5rem;
    font-weight: ${props => props.theme.bold};

    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        img {
            margin-left: 0.8rem;
            height: 0.8rem;
        }
    }
`;

const BtnBox = styled.div`
    padding: 1rem;
`;

const Btn = styled.span`
    font-weight: ${props => props.theme.buttonFontWeight};
    color: white;
    cursor: pointer;
    &:first-child {
        border-right: 2px solid #fff;
        padding-right: 2rem;
    }
    &:last-child {
        margin-left: 2rem;
        margin-right: 3rem;
    }
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: none;
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.getElementById("cardbox").style.cssText = "overflow : hidden;";
        } else {
            document.getElementById("cardbox").style.cssText = "overflow : scroll;";
        }
    }, [open]);
    return (
        <Wrapper>
            <Drawer setOpen={setOpen} open={open} />
            <TitleBox>
                <button onClick={() => setOpen(!open)}>
                    <FiMenu />
                </button>
                <Title>
                    <img src={"/svg/logo.svg"} alt={""} />
                </Title>
            </TitleBox>
            <BtnBox>
                <Btn>A 가공업체</Btn>
                <Btn>로그아웃</Btn>
            </BtnBox>
        </Wrapper>
    );
};

export default Header;
