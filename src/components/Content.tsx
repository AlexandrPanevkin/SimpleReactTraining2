import React from 'react';
import {DataStateType} from "./dataState/dataState";
import {Navigate} from "react-router-dom";

type PropsType = {
    page: DataStateType
    route: number
}


export const Content = (props: PropsType) => {
    return (
        props.route < props.page.pages.length ?
            <>
                < h2> {props.page.pages[props.route].heading}
                </h2>
                <div>{props.page.pages[props.route].about}</div>
            </>
            :
            <Navigate to={'/j'}/>
    )
        ;
};