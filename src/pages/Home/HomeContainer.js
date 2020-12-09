import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";
const HomeContainer = () => {
    const [data, setData] = useState([]);

    const [resetData, setResetData] = useState([]);

    //상담 중인 요청
    const [consulting, setConsulting] = useState(false);

    //체크박스 열림&닫힘
    const [active, setActived] = useState({
        process: false,
        material: false
    });

    //체크박스 표시
    const [checked, setChecked] = useState({
        process1: false,
        process2: false,
        material1: false,
        material2: false,
        material3: false,
        material4: false,
        material5: false
    });

    //가공방식 필터링
    const [process, setProcess] = useState("");

    //재료 필터링
    const [material, setMaterial] = useState("");

    //재료 갯수
    const [item, setItem] = useState([]);

    //재료 갯수 함수
    const handleItemCount = args => {
        if (!!item.find(e => e === args)) {
            setItem(item.filter(e => e !== args));
        } else {
            setItem([...item, args]);
        }
    };

    //데이터 패칭
    const getData = async () => {
        try {
            return await axios.get("http://localhost:4000/requests");
        } catch (e) {
            console.warn(e);
        }
    };

    //리셋 버튼 함수
    const onClickReset = () => {
        setConsulting(false);
        setActived({ process: false, material: false });
        setChecked({
            process1: false,
            process2: false,
            material1: false,
            material2: false,
            material3: false,
            material4: false,
            material5: false
        });
        setItem([]);
        setData([...resetData]);
    };

    //데이터 이팩트
    useEffect(() => {
        getData().then(result => {
            setData([...result.data]);
            setResetData([...result.data]);
        });
    }, []);

    //가공방식 필터링 이펙트
    useEffect(() => {
        let arr = [];
        data.map(request =>
            request.method.filter(e => {
                if (e === process) {
                    arr.push(request);
                }
                return request;
            })
        );
        setData([...arr]);
    }, [process]);

    //재료 필터링 이펙트
    useEffect(() => {
        let arr = [];
        data.map(request =>
            request.material.filter(e => {
                if (e === material) {
                    arr.push(request);
                    return;
                }
            })
        );
        setData(arr);
    }, [material]);

    //상담 상태 이펙트
    useEffect(() => {
        let arr = [];
        data.find(request => {
            if (request.status === "상담중") {
                arr.push(request);
                return;
            }
        });
        if (consulting === false) {
            arr = resetData;
        }
        setData(arr);
    }, [consulting]);

    //셀렉트 방식 영역 밖 클릭시 닫힘
    const handleCloseSelectBox = e => {
        if (e.target.id === "process" || e.target.id === "material") {
            return;
        } else {
            setActived({ process: false, material: false });
        }
    };

    //셀렉트 방식 영역 밖 클릭 시 & 스크롤 시 닫힘
    useEffect(() => {
        document.getElementById("cardbox").addEventListener("click", handleCloseSelectBox);
        document.getElementById("cardbox").addEventListener("scroll", handleCloseSelectBox);
        return () => {
            document.getElementById("cardbox").removeEventListener("click", handleCloseSelectBox);
            document.getElementById("cardbox").removeEventListener("scroll", handleCloseSelectBox);
        };
    });

    return (
        <HomePresenter
            data={data}
            consulting={consulting}
            setConsulting={setConsulting}
            active={active}
            setActived={setActived}
            setProcess={setProcess}
            setMaterial={setMaterial}
            onClickReset={onClickReset}
            setChecked={setChecked}
            checked={checked}
            item={item}
            setItem={setItem}
            handleItemCount={handleItemCount}
        />
    );
};

export default HomeContainer;
