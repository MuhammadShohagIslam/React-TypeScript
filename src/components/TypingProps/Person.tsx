import { PersonNameObject } from '../CustomeTypeProps/Custome.type'

const Person = (props: PersonNameObject) => {
    const { first, last } = props.name;
    return (
        <>
            <h2>
                My name is {first} {last}
            </h2>
        </>
    );
};

export default Person;
