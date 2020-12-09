import React, { useEffect, useRef, useState } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";
const HomeContainer = () => {
    const [data, setData] = useState([]);

    const [resetData, setResetData] = useState([]);

    const [consulting, setConsulting] = useState(false);

    const [active, setActived] = useState({
        process: false,
        material: false
    });

    const [checked, setChecked] = useState({
        process1: false,
        process2: false,
        material1: false,
        material2: false,
        material3: false,
        material4: false,
        material5: false
    });
    const [process, setProcess] = useState("");

    const [material, setMaterial] = useState("");

    const getData = async () => {
        try {
            return await axios.get("http://114.205.86.189:4000/requests");
        } catch (e) {
            console.warn(e);
        }
    };

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
        setData([...resetData]);
    };

    useEffect(() => {
        if (data !== undefined) {
            getData().then(result => {
                setData([...result.data]);
                setResetData([...result.data]);
            });
        }
    }, []);

    useEffect(() => {
        let arr = [];
        data.map(request =>
            request.method.filter(e => {
                if (e === process) {
                    arr.push(request);
                }
            })
        );
        setData([...arr]);
    }, [process]);

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

    const handleCloseSelectBox = e => {
        if (e.target.id === "process" || e.target.id === "material") {
            return;
        } else {
            setActived({ process: false, material: false });
        }
    };

    useEffect(() => {
        document.getElementById("cardbox").addEventListener("click", handleCloseSelectBox);
        return () => {
            document.getElementById("cardbox").removeEventListener("click", handleCloseSelectBox);
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
        />
    );
};

export default HomeContainer;
