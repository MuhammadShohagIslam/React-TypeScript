import React from "react";
import "./App.css";
// import Main from "./components/TypingProps/Main";
// import Main from './components/EventProps/Main';
// import StyleProps from "./components/StyleProps/StyleProps";
// import UseStateType from './components/UseStateType/User';
// import Main from "./components/UseReducer/Main";
// import { ThemContext } from './components/ContextAPI/ThemeContext'
// import { theme } from './components/ContextAPI/theme';
// import Box from './components/ContextAPI/Box';
// import { UserContextProvider } from "./components/ContextAPI/UserContext";
// import User from "./components/ContextAPI/User";
// import MainForRef from "./components/UseRef/Main";
// import MainClassComp from "./components/ClassComp/Main";
// import MainComponetProps from "./components/ComponentProps/Main";
// import MainGeneric from "./components/GenericProps/Main";
import MainRestriction from "./components/Restricting/Main";

function App() {
    return (
        <div className="App">
            {/* <Main /> */}
            {/* <Main/> */}
            {/* <StyleProps style={{fontSize: 30, color:"green"}} /> */}
            {/* <UseStateType /> */}
            {/* <Main/> */}
            {/* <ThemContext.Provider value={ theme }>
                <Box/>
            </ThemContext.Provider> */}
            {/* <UserContextProvider>
                <User/>
            </UserContextProvider> */}
            {/* <MainForRef/> */}
            {/* <MainClassComp/> */}
            {/* <MainComponetProps/> */}
            {/* <MainGeneric/> */}
            <MainRestriction/>

        </div>
    );
}

export default App;
