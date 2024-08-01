import CharacterList from "../CharacterList/CharacterList"
import "./CharacterSearch.css"
import { useState, useEffect } from "react"

export default function CharacterSearch() {

    const [apiUsers, setApiUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then(response => response.json())
            .then(data => {
                setApiUsers(data.results || [])
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [name])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setName(searchTerm)
    }

    return (
        <div className="CharacterSearch">
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder='Type to search a character'
            />
            
            {!loading && apiUsers.length === 0
                ? <p>No users found</p>
                : <CharacterList apiUsers={apiUsers} name={name}/>
            }
        </div>
    )
}