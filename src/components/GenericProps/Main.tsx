import List from "./List";

const Main = () => {
    const person = [
        {
            id:1,
            first: "A",
            last: "B"
        },
        {
            id: 2,
            first: "C",
            last: "D"
        }
    ]
    return (
        <>
            {/* <List style={{"listStyleType": "none"}} items={["A", "B", "C", "D"]}/>

            <List style={{"listStyleType": "none"}} items={[1, 2, 3, 4, 5]}/> */}

            <List style={{"listStyleType": "none"}} items={person}/>
        </>
    );
}

export default Main;