import { useState, useEffect } from "react"

export default function Pokedex() {
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])

    const nextPokemon = () =>{
        setId(id + 1)
    }

    const previousPokemon = () =>{
        setId(id - 1)
    }

    return (
        <div>
            {pokemon && (
                    <div className="pokemon">
                        <h1>Pokémon</h1>
                        <p>{pokemon.name}</p>
                        <p>Peso: {pokemon.weight}g</p>
                        <img src={pokemon.sprites.front_default} alt="Pokemon" />
                        <button onClick={nextPokemon}>Próximo</button>
                        <button onClick={previousPokemon}>Anterior</button>
                    </div>
            )}
        </div>
    )
}