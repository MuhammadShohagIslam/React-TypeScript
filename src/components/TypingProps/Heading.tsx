type HeadingProps = {
    children: string
    name?: string
}
const Heading = (props: HeadingProps) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.children}</h2>
        </>
    );
}

export default Heading;