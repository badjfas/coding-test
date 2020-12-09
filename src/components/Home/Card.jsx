import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 366px;
    max-height: 356px;
    padding: 24px 16px 24px 16px;
    border: 1px solid ${props => props.theme.borderGray};
    margin-bottom: 1rem;
    &:hover {
        border: 1px solid ${props => props.theme.blueColor};
    }
`;
const TitleBox = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderGray};
    padding-bottom: 1rem;
    > p {
        .title {
            font-weight: ${props => props.theme.bold};
            line-height: 24px;
            font-size: 1rem;
        }
        .client {
            font-weight: ${props => props.theme.normal};
            line-height: 20px;
            font-size: 0.9rem;
        }
        .due {
            padding-top: 2rem;
            color: ${props => props.theme.fontGray};
        }
    }
`;

const InfoBox = styled.div`
    margin-top: 2rem;
`;

const Info = styled.div`
    margin: 0.8rem 0 0.8rem 0;
    width: 100%;
    display: flex;
    .info {
        width: 7rem;
        font-size: 14px;
        color: ${props => props.theme.fontGray};
    }
    .info_detail {
        font-weight: ${props => props.theme.bold};
        font-size: 14px;
    }
`;

const BtnBox = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;
const Btn = styled.button`
    padding: 6px 12px 6px 12px;
    border-radius: 4px;
    &:first-child {
        background-color: ${props => props.theme.blueColor};
        border: none;
        color: #fff;
        margin-right: 1rem;
    }
    &:last-child {
        border: 2px solid ${props => props.theme.blueColor};
        color: ${props => props.theme.blueColor};
    }
`;
const Card = ({ data }) => {
    const { id, title, client, due, count, material, method, status, amount, docs } = data;
    console.log(method.join(","));
    return (
        <Wrapper>
            <TitleBox>
                <p>
                    <span className="title">{title}</span>
                    <br />
                    <span className="client">{client}</span>
                    <br />
                    <div className="due">
                        <span>{due}까지 납기</span>
                    </div>
                </p>
            </TitleBox>

            <InfoBox>
                <Info>
                    <span className="info">도면개수</span>
                    <span className="info_detail">{count || docs}개</span>
                </Info>
                <Info>
                    <span className="info">총 수량</span>
                    <span className="info_detail">{amount}개</span>
                </Info>
                <Info>
                    <span className="info">가공방식</span>
                    <span className="info_detail">{method.join(", ")}</span>
                </Info>
                <Info>
                    <span className="info">재료</span>
                    <span className="info_detail">{material.join(", ")}</span>
                </Info>
            </InfoBox>

            <BtnBox>
                <Btn>요청 내역 보기</Btn>
                <Btn>채팅하기</Btn>
            </BtnBox>
        </Wrapper>
    );
};

export default Card;
