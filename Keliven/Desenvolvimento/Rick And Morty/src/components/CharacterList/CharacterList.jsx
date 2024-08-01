import "./CharacterList.css"

export default function CharacterList({ apiUsers, name }) {
    return (
        <>
            {name == '' 
                ? <p></p>

                : <ul>
                    {apiUsers.map(user => <li key={user.id}>{user.name} <img src={user.image}></img></li>)}
                </ul>

            }
        </>
    )
}