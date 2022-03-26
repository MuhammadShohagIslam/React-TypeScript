import { useState } from 'react';

type UserRegister = {
    name: string,
    email: string
}

const User = () => {
    const [isLogging, setIsLoging] = useState(true);
    const [isRegister, setIsRegister] = useState<UserRegister>({} as UserRegister)

    const loggingHandler = () =>{
        setIsLoging(!isLogging);
    }

    const registerHandler = () => {
        setIsRegister({
            name: "ABC",
            email: '1@gmail.com'
        })
    }

    return (
        <>
            <h2>{isLogging ? "Already Logging": "Register Now"}</h2>
            <button onClick={loggingHandler}></button>
            <h3>Registration Area</h3>
                <ul>
                    <li>{isRegister.name}</li>
                    <li>{isRegister.email}</li>
                </ul>
                <button onClick={registerHandler} >Register Now</button>
        </>
    );
}

export default User;