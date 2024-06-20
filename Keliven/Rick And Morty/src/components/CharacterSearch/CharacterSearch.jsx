import "./CharacterSearch.css"
import { useState, useEffect } from "react"

export default function CharacterSearch() {

    const [name, setName] = useState(null)

    return (
        <>
            <h1>Rick and Morty</h1>
            <input className="inputCharacterName" type="text" title="Nome" placeholder="Nome"></input>
        </>
    )
}