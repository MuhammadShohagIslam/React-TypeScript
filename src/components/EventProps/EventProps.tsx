type ButtonEventProps = {
    value: string,
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const EventProps = (props:ButtonEventProps) => {
    return (
        <>
            <button onClick={(event)=>props.handleClick(event,1)} >{props.value}</button>
        </>
    );
}

export default EventProps;