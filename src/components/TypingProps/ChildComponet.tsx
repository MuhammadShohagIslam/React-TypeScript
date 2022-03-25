type ChildComponetProps = {
    children: React.ReactNode
}

const ChildComponet = (props: ChildComponetProps) => {
    return (
        <>
            <h2>{props.children}</h2>
        </>
    );
}

export default ChildComponet;