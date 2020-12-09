import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
const Wrapper = styled.div`
    height: 32px;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px 4px 12px;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    border: 1px solid ${props => props.theme.borderGray};
    background-color: ${props => (props.active ? props.theme.primaryBlueColor : "#fff")};
    color: ${props => (props.active ? "#fff" : props.theme.fontDarkGray)};
    margin-right: 0.7rem;
    svg {
        color: ${props => (props.active ? "#fff" : props.theme.fontDarkGray)};
    }
    &:hover {
        border: 1px solid ${props => props.theme.blueColor};
    }
`;
const SelectBox = styled.div`
    display: ${props => (props.active ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    top: 40px;
    z-index: 5000;
    left: 3px;
    border: 1px solid ${props => props.theme.borderGray};
    border-radius: 5px;
    width: 130px;
    background-color: #fff;
`;

const Label = styled.label`
    z-index: 999;
    padding: 4px 12px 4px 12px;
    background-color: #fff;
    color: #000;
`;
const Filter = ({ active, setActived, setProcess, checked, setChecked }) => {
    return (
        <Wrapper id="process" active={active} onClick={() => setActived({ ...active, process: !active })}>
            가공방식 <IoMdArrowDropdown />
            <SelectBox active={active}>
                <Label>
                    <input
                        type="checkbox"
                        value="밀링"
                        readOnly
                        checked={checked.process1}
                        onClick={() => {
                            setChecked({ ...checked, process1: !checked.process1 });
                            setProcess("밀링");
                        }}
                    />
                    밀링
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        value="선반"
                        readOnly
                        checked={checked.process2}
                        onClick={() => {
                            setChecked({ ...checked, process2: !checked.process2 });
                            setProcess("선반");
                        }}
                    />
                    선반
                </Label>
            </SelectBox>
        </Wrapper>
    );
};

export default Filter;
