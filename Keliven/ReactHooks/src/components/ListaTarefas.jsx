import { useCallback, useReducer, useEffect, useState } from "react";
const tarefasReducer = (state, action) =>{
    switch(action.type){
        case "add_tarefa":
            return[...state, action.payload]
        //payload é o novo dado (valor da tarefa) que está sendo adicionado à lista
        case "concluir_tarefa":
            const atualizarTarefa = [...state]
            atualizarTarefa[action.payload].completed = true
            //utilizando a função completed para marcar como verdadeiro
            //quando o dado atual (payload) for marcado como concluido
            return atualizarTarefa
    }
}

export default function ListaTarefas(){
    //definir as variaveis da nossa lista
    const [tarefa, setTarefa] = useState('')

    //usando o dispatch para mandar as ações pro useReducer executar
    const[tarefaAtual, dispatch] = useReducer(tarefasReducer, [])

    //usando o useCallback para gerenciar as tarefas na memoria cache
    const addTarefa = useCallback(() => {
        //verificando se a tarefa não está vazia oara que seja armazenada na memória cache
        if(tarefa.trim() !== ''){
            dispatch({type: "add_tarefa", payload: {text:tarefa, completed: false}})
        }
    }, [tarefa])

    const concluirTarefa = useCallback((index) => {
        dispatch({type: "concluir_tarefa", payload: index})
    , []})
    return(
        <div className="center">
            <h1>Lista de tarefas</h1>
            <div className="inputArea">
                <input type="text" placeholder="Nova tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
                <button onClick={addTarefa}>Add Tarefa</button>
            </div>
            <ul>
                {/* Criando a lista com as tarefas que forem sendo adicionadas
                vamos usar o .map para mapear cada tarefa
                user o index para identificar a posição de cada tarefa adicionada */}

                {tarefaAtual.map((tarefas, index)=>(
                    <li key={index}>
                        <span style={{textDecoration: tarefas.completed	? 'line-through' : 'none'}}>
                            {tarefas.text} 
                        </span>
                        
                        {/* Verificador para ver se a tarefa tá feita ou não*/}

                        {!tarefas.completed && (
                            <>
                                <button onClick={() => concluirTarefa(index)}>Concluir</button>
                            </>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    )
}