import React from 'react';

export const dataState: DataStateType = {
    pages:
        [
            {
                heading: 'цикл while',
                about: 'цикл while имеет следующий синтаксис:'
            },
            {
                heading: 'цикл for',
                about: 'цикл for имеет следующий синтаксис:'
            },
            {
                heading: 'Конструкция \'switch\'',
                about: 'Конструкция switch заменяет собой сразу несколько if.:'
            },
        ],
};

export type DataStateType = {
    pages: PagesType[]
}

export type PagesType = {
    heading: string
    about: string
}