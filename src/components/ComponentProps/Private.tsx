import Login from "./Login";
import {ProfileProps} from './Profile';

type PrivateProps = {
    isLogIn: boolean,
    component: React.ComponentType<ProfileProps>
}

const Private = ({isLogIn, component: Component}: PrivateProps) => {

    if (isLogIn) {
        return(
            <>
                <Login/>
            </>
        )
    }else{
        return (
            <>
                <Component name= "Muhammad Shohag Islam"/>
            </>
        )
    }
}

export default Private;