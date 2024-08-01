import "./CEPInput.css"
import { useEffect, useState } from "react"
import Address from "../Address/Address"

export default function CEPInput() {

    const [valueCEP, setValueCEP] = useState("")
    const [apiCEP, setApiCEP] = useState("")
    const [endereco, setEndereco] = useState([])

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${apiCEP}/json`)
            .then(response => response.json())
            .then(data => {
                setEndereco(data.error ? [] : data)
            })
            .catch(err => {
            
            })
    }, [apiCEP])

    const getApiCEP = () => {
        setApiCEP(valueCEP)
        console.log(endereco)
    }

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setValueCEP(searchTerm)
        console.log(endereco)
    }

    return (
        <div className="CEPInput">
            <input value={valueCEP} type="number" onChange={handleInputChange}></input>
            <button onClick={getApiCEP}>Buscar</button>
            {!endereco.erro && endereco.length != 0
                ? <Address
                    street={endereco.logradouro}
                    district={endereco.bairro}
                    city={endereco.localidade}
                    state={endereco.uf}
                />
                : <></>}
            {endereco.erro
                ? <h2>CEP não encontrado</h2>
                : <></>}

            {endereco.length == 0 && apiCEP.length == 0
                ? <h2>Insira um CEP</h2>
                : <></>}

            {endereco.length == 0 && apiCEP.length != 0
                ? <h2>Insira um CEP válido</h2>
                : <></>}
        </div>
    )
}