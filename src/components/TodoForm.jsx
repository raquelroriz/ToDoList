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
      <h2>Create task:</h2>

      <form onSubmit={handleSubmit}>

        <input
          type='text'
          placeholder='Enter the title'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Trabalho">Work</option>
          <option value="Pessoal">Personal</option>
          <option value="Estudos">Studies</option>
        </select>

        <button type='submit'>Create task</button>
      </form>

    </div>
  );
};

export default TodoForm
