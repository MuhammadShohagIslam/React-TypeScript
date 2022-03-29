type ButtonProps = {
    variant: "primary" | "secondary",
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

// when you want to work design system, we have to remember for this

const Button = ({variant, children, ...rest}:ButtonProps) => {
    return (
        <>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </>
    );
}

export default Button;