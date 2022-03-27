import { useReducer } from "react";

type InitialState = {
    counter: number;
};
type CounterAction = {
    type: string;
};

const initialState = {
    counter: 5,
};

const reducer = (state: InitialState, action: CounterAction) => {
    switch (action.type) {
        case "Increment":
            return { counter: state.counter + 1 };
        case "Decrement":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h2>TypeScript With useReducer Hook</h2>
            <h3>Counter --- {count.counter}</h3>
            <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        </>
    );
};

export default Counter;
