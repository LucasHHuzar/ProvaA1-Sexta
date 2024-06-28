import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../models/Categoria";
import { Tarefa } from "../models/Tarefas";

function TarefaCadastrar() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const [categoriaId, setCategoriaId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategoria(categoria);
      });
  }

  function cadastrarTarefa(e: any) {
    const tarefas: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      categoriaId: categoriaId,
      status: status
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefas),
    })
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa) => {
        navigate("/components/tarefas/tarefasListar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrarTarefa}>
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Digite o titulo"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite a descrição"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Status:</label>
        <input
          type="text"
          placeholder="Não Iniciada"
          onChange={(e: any) => setStatus(e.target.value)}
        />
        <br />
        
        <label>Categorias:</label>
        <select onChange={(e: any) => setCategoriaId(e.target.value)}>
          {categoria.map((categoria) => (
            <option value={categoria.categoriaId} key={categoria.categoriaId}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;
