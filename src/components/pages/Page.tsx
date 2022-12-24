import React from 'react';
import {DataStateType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PropsType = {
    dataState: DataStateType
}

export const Page = (props: PropsType) => {
    let params = useParams()
    return (
        <div>
            <Content
                page={props.dataState}
                route={Number(params.id)}
            />
        </div>
    );
};
