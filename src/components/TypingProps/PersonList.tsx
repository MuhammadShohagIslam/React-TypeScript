import { Name } from '../CustomeTypeProps/Custome.type';

type PersonListProps = {
    name: Name[];
};

const PersonList = (props: PersonListProps) => {
    const { name } = props;
    return (
        <>
            <div>
                <h2>Person List</h2>
                {name.map((name) => {
                    return (
                        <h2 key={name.first}>
                            {name.first} {name.last}
                        </h2>
                    );
                })}
            </div>
        </>
    );
};

export default PersonList;
