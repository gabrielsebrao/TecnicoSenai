// exemplo de useReducer
import React, {useReducer} from "react";

const initialState = {count: 0}

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

export default function Exemplo1(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: "increment"})}>Somar</button>
            <button onClick={() => dispatch({type: "decrement"})}>Diminuir</button>
        </div>
    )
}