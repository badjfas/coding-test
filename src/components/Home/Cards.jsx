import React, { Fragment } from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    width: 100%;
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
        padding: 1rem;
    }
`;

const EmptyBox = styled.div`
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.borderGray};
    width: 100%;
    height: 10vh;
    color: ${props => props.theme.fontGray};
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        width: 90%;
        margin: 0px auto;
    }
`;

const Cards = ({ data }) => {
    return (
        <Fragment>
            <Wrapper>
                {data.map((e, index) => {
                    return <Card data={e} key={index} />;
                })}
            </Wrapper>
            {data.length === 0 ? <EmptyBox>조건에 맞는 견적 요청이 없습니다.</EmptyBox> : null}
        </Fragment>
    );
};

export default Cards;
