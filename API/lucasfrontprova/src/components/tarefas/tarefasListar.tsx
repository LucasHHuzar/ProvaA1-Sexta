import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tarefa } from "../models/Tarefas";
import axios from "axios";

function TarefaListar() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefasAlterar, setTarefasAlterar] = useState("");

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  function alterarTarefa(tarefaId: string){

    console.log(`Id: ${tarefaId}`);

    axios.put(`http://localhost:5000/tarefas/alterar/${tarefaId}`).then((resposta) => {
      console.log(resposta.status);
      // setTarefasAlterar(resposta.status);
    });

  }

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Criado Em</th>
            <th>Categoria</th>
            <th>Categoria Id</th>
            <th>Status</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.criadoEm}</td>
              <td>{tarefa.categoriaId}</td>
              <td>{tarefa.status}</td>
              <td>
                <button onClick={() => { alterarTarefa(tarefa.tarefaId!); }}> Alterar </button>
              </td>
              <td>
                <Link to={`/components/tarefas/tarefasListar/${tarefa.tarefaId!}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListar;
