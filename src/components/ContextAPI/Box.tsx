import { ThemContext } from './ThemeContext';
import { useContext } from 'react';

const Box = () => {
    const theme = useContext(ThemContext);

    return (
        <>
            <div style={{backgroundColor: theme.primary.main, color: theme.primary.text, fontSize: 23}} > Theme Context</div>
        </>
    );
}

export default Box;