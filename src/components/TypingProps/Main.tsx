import ChildComponet from "./ChildComponet";
import Greet from "./Greet";
import Heading from "./Heading";
import Person from "./Person";
import PersonList from "./PersonList";
import Status from "./Status";

const Main = () => {
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
        <>
            {/* We use option props which is indicated if we do not provide, it's not affected any more */}
            {/* <Greet
                name="Muhammad Islam Shohag"
                isLoggedIn={true}
            /> */} 
            <Greet
                name="Muhammad Islam Shohag"
                isLoggedIn={true}
                messageCount={10}
            />
            <Person name={personName} />
            <PersonList name={nameList} />
            <Status status= "Loading" />
            <Heading name ="Heading Componnt">This is text which comes from children props</Heading>
            <ChildComponet>
                <Heading name="Good">This is text which comes from child component props</Heading>
            </ChildComponet>
        </>
    );
}

export default Main;