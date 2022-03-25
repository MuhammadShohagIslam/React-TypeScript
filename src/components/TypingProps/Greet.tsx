type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
    const { name, messageCount = 0, isLoggedIn } = props;
    return (
        <>
            {isLoggedIn ? (
                <h2>
                    Welcome to {name}! You have {messageCount} unread message
                </h2>
            ) : (
                <h2>Your are my Guest</h2>
            )}
        </>
    );
};

export default Greet;
