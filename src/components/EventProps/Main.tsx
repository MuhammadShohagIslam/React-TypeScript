import { useState } from "react";
import EventProps from "./EventProps";
import InputEvent from "./InputEvent";

const Main = () => {
    const [inputValue, setInputValue] = useState("Input");
    
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => {
        console.log(event, id);
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };
    return (
        <>
            <h2>Event Props Component</h2>
            <EventProps value="Click Here" handleClick={handleClick} />
            <InputEvent value={inputValue} changeHandler={changeHandler} />
        </>
    );
};

export default Main;
