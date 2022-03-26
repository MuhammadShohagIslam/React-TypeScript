type InputEventProps = {
    value: string;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// const InputEvent = (props:InputEventProps) => {
//     return (
//         <>
//             <input value={props.value} onChange={props.changeHandler}/>
//         </>
//     );
// }

// export default InputEvent;

const InputEvent = ({ value, changeHandler }: InputEventProps) => {
    return (
        <>
            <input value={value} onChange={changeHandler} />
        </>
    );
};

export default InputEvent;
