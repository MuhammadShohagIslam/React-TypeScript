import Private from "./Private";
import Profile from "./Profile";

const Main = () => {
    return (
        <>
            <Private isLogIn={true} component={Profile}/>
        </>
    );
}

export default Main;