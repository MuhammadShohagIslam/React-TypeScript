type InputProps = React.ComponentProps<'input'> // wrapping html element

const Input = (props: InputProps) => {
    return (
        <>
            <input {...props}/>
        </>
    );
}

export default Input;