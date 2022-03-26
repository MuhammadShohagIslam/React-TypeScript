import React from "react";
import "./App.css";
import StyleProps from "./components/StyleProps/StyleProps";
// import Main from "./components/TypingProps/Main";
// import Main from './components/EventProps/Main';


function App() {
    return (
        <div className="App">
            {/* <Main /> */}
            {/* <Main/> */}
            <StyleProps style={{fontSize: 30, color:"green"}} />
        </div>
    );
}

export default App;
