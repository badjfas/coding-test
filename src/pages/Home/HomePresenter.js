import React from "react";
import styled from "styled-components";
import Cards from "../../components/Home/Cards";
import FilterProcess from "../../components/Home/FilterProcess";
import FilterMaterial from "../../components/Home/FilterMaterial";
import { GrPowerReset } from "react-icons/gr";
import ToggleBtn from "../../components/Home/ToggleBtn";
import { Refresh } from "../../components/svg/Icons";
const Container = styled.div`
    max-width: 1440px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Box = styled.div`
    margin: 0px auto;
    padding: 100px 0 50px 0;
    width: 100%;

    h2 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
    }
    h3 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
    }
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        padding: 50px 0 20px 0;
    }
`;

const FilterBox = styled.div`
    display: flex;
    margin-top: 2.5rem;
    justify-content: space-between;
    z-index: 5000;
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0 1rem 1rem 1rem;
    }
`;

const Filters = styled.div`
    display: flex;
    position: relative;
`;

const ResetBtn = styled.button`
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${props => props.theme.blueColor};
    font-size: 1rem;
    svg {
        margin-right: 0.7rem;
    }
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: none;
    }
`;

const WelcomeBox = styled.div`
    @media (min-width: ${props => props.theme.breakpointMobile}) and (max-width: ${props =>
            props.theme.breakpointTablet}) {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
`;

const HomePresenter = ({
    data,
    consulting,
    setConsulting,
    active,
    setActived,
    setProcess,
    setMaterial,
    onClickReset,
    checked,
    setChecked
}) => {
    return (
        <Container id="cardbox">
            <Box>
                <WelcomeBox>
                    <h2>들어온 요청</h2>
                    <br />
                    <h3>파트너님에게 딱 맞는 요청서를 찾아보세요.</h3>
                    <br />
                </WelcomeBox>
                <FilterBox>
                    <Filters>
                        <FilterProcess
                            checked={checked}
                            setChecked={setChecked}
                            active={active.process}
                            setActived={setActived}
                            setProcess={setProcess}
                        />
                        <FilterMaterial
                            active={active.material}
                            setActived={setActived}
                            setMaterial={setMaterial}
                            checked={checked}
                            setChecked={setChecked}
                        />
                        <ResetBtn onClick={onClickReset}>
                            <Refresh />
                            필터링 리셋
                        </ResetBtn>
                    </Filters>
                    <ToggleBtn consulting={consulting} setConsulting={setConsulting} />
                </FilterBox>
            </Box>
            <Cards data={data} consulting={consulting} setConsulting={setConsulting} />
        </Container>
    );
};

export default HomePresenter;
