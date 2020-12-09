import React, { Fragment } from "react";
import styled from "styled-components";
import { Building } from "../svg/Icons";
const Overlay = styled.div`
    display: ${props => (props.visible ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: ${props => (props.visible ? "100%" : "0px")};
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9000;
`;

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => (props.visible ? "calc(100% / 2)" : "0px")};
    background-color: #fff;
    overflow-x: hidden;
    z-index: 9999;
    transition: width 0.2s ease-in;
`;

const TitleBox = styled.div`
    padding: 1rem;
    display: ${props => (props.visible ? "flex" : "none")};
    height: 3rem;
    border: 1px solid ${props => props.theme.borderGray};
    img {
        svg {
            fill: black;
        }
    }
    > span {
        overflow: hidden;
        font-weight: 900;
        width: ${props => (props.visible ? "100%" : "0px")};
        font-size: 16px;
        color: ${props => props.theme.blueColor};
    }
`;

const MenuLists = styled.div`
    display: ${props => (props.visible ? "flex" : "none")};
    flex-direction: column;
    padding: 2rem 0.5rem 0.5rem 0.5rem;
    min-width: 10rem;
    > span {
        overflow: hidden;
        font-size: 16px;
        width: ${props => (props.visible ? "100%" : "0px")};
    }
`;
const List = styled.span`
    padding: 0.6rem;
    height: 3rem;
    cursor: pointer;
    &:not(:first-child) {
        margin-top: 1rem;
    }
    svg {
        margin-right: 0.5rem;
    }
`;

const Drawer = ({ open, setOpen }) => {
    return (
        <Fragment>
            <Wrapper visible={open}>
                <TitleBox visible={open}>
                    {/* <span>CAPA 파트너스</span> */}
                    <img src={"/svg/logo-blue.svg"} alt="" />
                </TitleBox>
                <MenuLists visible={open}>
                    <List>
                        <Building />
                        파트너정밀가공
                    </List>
                    <List>로그아웃</List>
                </MenuLists>
            </Wrapper>
            <Overlay visible={open} onClick={() => setOpen(false)} />
        </Fragment>
    );
};

export default Drawer;
