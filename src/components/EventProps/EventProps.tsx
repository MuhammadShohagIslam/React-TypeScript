type ButtonEventProps = {
    value: string;
    handleClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => void;
};

const EventProps = ({ value, handleClick }: ButtonEventProps) => {
    return (
        <>
            <button onClick={(event) => handleClick(event, 1)}>{value}</button>
        </>
    );
};

export default EventProps;
