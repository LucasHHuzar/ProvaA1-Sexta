import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TarefaListar from './components/tarefas/tarefasListar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/components/tarefas/tarefasListar"}>Home</Link>
            </li>
            <li>
              <Link to={"/components/tarefas/tarefasListar"}>
                Listar Tarefas{" "}
              </Link>
            </li>
            <li>
              <Link to={"/components/tarefas/tarefasCadastrar"}>
                Cadastrar Tarefas{" "}
              </Link>
            </li>
            <li>
              <Link to={"/components/tarefas/tarefasListarNaoCadastrar"}>
                Listar Tarefas Não Concluidas{" "}
              </Link>
            </li>
            <li>
              <Link to={"/components/tarefas/tarefasListarConcluidas"}>
                Listar Tarefas Concluidas{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar />} />
          <Route
            path="/components/tarefas/tarefasListar"
            element={<TarefaListar />}
          />
          <Route
            path="/components/tarefas/tarefasCadastrar"
            element={<TarefaListar />}
          />
          {/* <Route
            path="/pages/produto/alterar/:id"
            element={<TarefaListar />}
          /> */}
        </Routes>
        <footer>
          <p>Desenvolvido por Lucas Huzar Habinowksi</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
