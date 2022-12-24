import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "./dataState/dataState";
import {useWindowSize} from "../helpers/useWindoSize";
import {LocalStorage} from "./pages/LocalStorage";


export const Site = () => {
    const size = useWindowSize()
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size > 50 ? <div className={styles.nav}>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink} to={'/page/0'}>Page
                        1</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink} to={'/page/1'}>Page
                        2</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink} to={'/page/2'}>Page
                        3</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink} to={'/page/localStorage'}>Local storage</NavLink></div>
                </div> : <div></div>}

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path={'/page/:id'} element={<Page dataState={dataState}/>}/>
                        <Route path={'/page/localStorage'} element={<LocalStorage/>}/>


                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

