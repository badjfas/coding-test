import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
const Wrapper = styled.div`
    width: 98px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 4px 12px 4px 12px;
    cursor: pointer;
    position: relative;
    border: 1px solid ${props => props.theme.borderGray};
    background-color: ${props => (props.active ? props.theme.primaryBlueColor : "#fff")};
    color: ${props => (props.active ? "#fff" : props.theme.fontDarkGray)};
    margin-right: 2rem;
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
const Filter = ({ active, setActived, setMaterial, checked, setChecked }) => {
    return (
        <Wrapper id="material" active={active} onClick={() => setActived({ ...active, material: !active })}>
            재료 <IoMdArrowDropdown />
            <SelectBox active={active}>
                <Label>
                    <input
                        type="checkbox"
                        value="알루미늄"
                        checked={checked.material1}
                        readOnly
                        onClick={() => {
                            setChecked({ ...checked, material1: !checked.material1 });
                            setMaterial("알루미늄");
                        }}
                    />
                    <span>알루미늄</span>
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        value="탄소강"
                        readOnly
                        checked={checked.material2}
                        onClick={() => {
                            setChecked({ ...checked, material2: !checked.material2 });
                            setMaterial("탄소강");
                        }}
                    />
                    탄소강
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        value="구리"
                        readOnly
                        checked={checked.material3}
                        onClick={() => {
                            setChecked({ ...checked, material3: !checked.material3 });
                            setMaterial("구리");
                        }}
                    />
                    구리
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        value="합금강"
                        readOnly
                        checked={checked.material4}
                        onClick={() => {
                            setChecked({ ...checked, material4: !checked.material4 });
                            setMaterial("합금강");
                        }}
                    />
                    합금강
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        value="강철"
                        readOnly
                        checked={checked.material5}
                        onClick={() => {
                            setChecked({ ...checked, material5: !checked.material5 });
                            setMaterial("강철");
                        }}
                    />
                    강철
                </Label>
            </SelectBox>
        </Wrapper>
    );
};

export default Filter;
