import {createContext} from 'react';

type ThemProps = {
    primary: {
        main: string,
        text: string
    },
    secondary: {
        main: string,
        text: string
    }
}

export const ThemContext = createContext({} as ThemProps )

