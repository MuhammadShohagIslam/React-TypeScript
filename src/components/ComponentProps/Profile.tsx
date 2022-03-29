export type ProfileProps = {
    name: string
}

const Profile = ({name}: ProfileProps) => {
    return (
        <>
            <h2>This is Profile Component. My name is {name}</h2>
        </>
    );
}

export default Profile;