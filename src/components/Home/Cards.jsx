import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;
const Cards = ({ data }) => {
    return (
        <Wrapper>
            {data.map(e => {
                return <Card data={e} />;
            })}
        </Wrapper>
    );
};

export default Cards;
