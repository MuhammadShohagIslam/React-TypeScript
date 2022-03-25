type StatusProps = {
    status: "Loading" | "Success" | "Error"
}

const Status = (props:StatusProps) => {
    
    let message;
    if(props.status === "Loading"){
        message = "Text is loading"
    } else if(props.status === 'Success'){
        message = "Text is successfuly display"
    } else if (props.status === "Error"){
        message = "Something Problem of your code"
    }
    return (
        <>
            <h2>Status - {message}</h2>
        </>
    );
}

export default Status;