import { Tarefa } from "./TipoTarefa";

interface Props {
  tarefa: Tarefa;
  eliminaTarefa: (id: number) => void;
  toggleCompleta: (id: number) => void; // Nova função para alternar o estado
}

function ItemTarefa({ tarefa, eliminaTarefa, toggleCompleta }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.completa}
        onChange={() => toggleCompleta(tarefa.id)} // Chama a função ao clicar no checkbox
      />
      <span>{tarefa.descricao}</span>
      <button onClick={() => eliminaTarefa(tarefa.id)}>Excluir</button>
    </li>
  );
}

export default ItemTarefa;
