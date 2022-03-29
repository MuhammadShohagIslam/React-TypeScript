type RandomNumbers = {
    value: number
}

type IsPositive = RandomNumbers & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never,
}

type IsNegative = RandomNumbers & {
    isPositive?: never,
    isNegative: boolean,
    isZero?: never,
}

type IsZero = RandomNumbers & {
    isPositive?: never,
    isNegative?: never,
    isZero: boolean,
}

type RandomNumberPros = IsPositive | IsNegative | IsZero

const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberPros) => {
    return (
        <>
            <h2>Restriction Component</h2>
            <div>{value}</div>
            <div>{isPositive && "Positive"}</div>
            <div>{isNegative && "Negative"}</div>
            <div>{isZero && "Zero"}</div>
        </>
    );
}

export default RandomNumber;