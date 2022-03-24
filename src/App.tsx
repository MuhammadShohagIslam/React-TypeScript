import React from "react";
import "./App.css";
import Greet from "./components/TypingProps/Greet";
import Person from "./components/TypingProps/Person";
import PersonList from "./components/TypingProps/PersonList";

function App() {
    const personName = {
        first: "Muhammad Islam",
        last: " Shohag",
    };

    const nameList = [
        {
            first: "Muhammad Islam",
            last: " Shohag",
        },
        {
            first: "Habibur Rahman",
            last: " Sojib",
        },
    ];
    return (
        <div className="App">
            <Greet
                name="Muhammad Islam Shohag"
                messageCount={10}
                isLoggedIn={true}
            />
            <Person name={personName} />
            <PersonList name={nameList} />
        </div>
    );
}

export default App;
