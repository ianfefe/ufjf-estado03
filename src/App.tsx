import { useReducer} from 'react'
import './App.css'
import Pacote, { PacoteChaveType, PacoteType } from './Pacote'
import { PacoteReducer } from './PacoteReducer';
import { PACOTES_DEFAULT } from './PacotesDefault';

function App() {
  const[pacotes, dispatch] = useReducer(PacoteReducer, PACOTES_DEFAULT);

  function editarPacote(
    pacote : PacoteType,
    chave : PacoteChaveType,
    valor: number
  ): void {
    dispatch({type:"editar",id: pacote.id, chave, valor})
  }

  function excluirPacote(pacote: PacoteType) {
    dispatch({type:"excluir",id: pacote.id})
  }

  return (
    <>
    <button onClick={() => {
      dispatch({type: "criar", id: crypto.randomUUID()})
    }}>
      Criar
    </button>

    {pacotes.map((p) => {
      <Pacote
      key={p.id}
      pacote={p}
      onEditarPacote={editarPacote}
      onExcluirPacote={excluirPacote}
      ></Pacote>
    })}
    </>
  )
}

export default App
