import "./CharacterSearch.css"
import { useState, useEffect } from "react"

export default function CharacterSearch() {

    const [apiUsers, setApiUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(apiUsers)

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setApiUsers(data.users)
                setFilteredUsers(data.users)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setName(searchTerm)
        console.log(apiUsers)
        const filteredItems = apiUsers.filter((user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredUsers(filteredItems)
    }

    return (
        <>
            <h1>Rick and Morty</h1>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder='Type to search'
            />
            {!loading && filteredUsers.length === 0
                ? <p>No users found</p>
                : <ul>
                    {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
                </ul>
            }
        </>
    )
}