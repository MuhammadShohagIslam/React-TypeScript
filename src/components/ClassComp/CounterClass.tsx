import React from "react";

type HookCounterProps = {
    message: string
}

type CounterState = {
    count: number
}

class CounterClass extends React.Component<HookCounterProps, CounterState> {
    state ={
        count: 0,
    }
    countHandler =() =>{
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render( ){
        return (
            <>
                <h2>{this.props.message}= {this.state.count}</h2>
                <button onClick={this.countHandler}>Increment</button>
            </>
        )
    }
}

export default CounterClass;