import { useReducer } from "react";

type InitialState = {
    counter: number;
};
type UpdateAction = {
    type: "Increment" | "Decrement";
    value: number
};

type ResetAction = {
    type: "Reset"
}

type CounterAction = UpdateAction | ResetAction
const initialState = {
    counter: 5,
};

const reducer = (state: InitialState, action: CounterAction) => {
    switch (action.type) {
        case "Increment":
            return {counter: state.counter + action.value };
        case "Decrement":
            return {counter: state.counter - action.value };
        case "Reset":
            return initialState;
        default:
            return initialState;
    }
};

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    // console.log(count)
    return (
        <>
            <h2>TypeScript With useReducer Hook</h2>
            <h3>Counter --- {count.counter}</h3>
            <button onClick={() => dispatch({type: "Increment", value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement", value: 2})}>Decrement</button>
            <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
        </>
    );
};

export default ComplexCounter;
