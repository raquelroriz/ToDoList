import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // value é o titulo
  const [category, setCategory] = useState("");

  // esse (e) é um evento
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return; // ! se não tiver valur ou não tiver category, retorne , volte
    addTodo(value, category);
    setValue("");
    setCategory("");
  }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>

      <form onSubmit={handleSubmit}>

        <input
          type='text'
          placeholder='Digitie o título'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type='submit'>Criar Tarefa</button>
      </form>

    </div>
  );
};

export default TodoForm
