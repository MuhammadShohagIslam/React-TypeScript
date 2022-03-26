type CSSStyleProps = {
    style: React.CSSProperties
}

const StyleProps = (props:CSSStyleProps) => {
    return (
        <>
            <h2 style={props.style}>Style With CSS Props</h2>
        </>
    );
}

export default StyleProps;