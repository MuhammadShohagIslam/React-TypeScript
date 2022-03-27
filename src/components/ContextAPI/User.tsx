import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {

    const userContext = useContext(UserContext);

    const handleLogIn = () =>{
        if(userContext){
            userContext.setUser({
                name: "Muhammad Shohag Islam",
                email: "s@gmail.com"
            })
        }
    }
    const handleLogOut = () =>{
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <>
            <button type="button" onClick={handleLogIn}>LogIn</button>
            <button type="button" onClick={handleLogOut}>LogOut</button>
            <div>User Name Is: {userContext?.user?.name}</div>
            <div> User Email Is: {userContext?.user?.email}</div>
        </>
    );
}

export default User;