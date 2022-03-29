import Button from "./Button";
import Input from "./Input";

const Main = () => {
    return (
        <>
            <Button variant="primary" onClick={()=> console.log("Clicked")}>
                Click Here
            </Button>
            <Input value='value' type='text' onChange={()=> console.log('Changed')} />
        </>
    );
}

export default Main;