type ChildComponetProps = {
    children: React.ReactNode
}

const ChildComponet = (props: ChildComponetProps) => {
    return (
        <>
            {props.children}
        </>
    );
}

export default ChildComponet;