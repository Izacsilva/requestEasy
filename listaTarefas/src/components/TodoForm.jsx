import React from 'react'
import { useState } from 'react'

function TodoForm() {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");


  // tratar o evento de envio de dados pelo formulário. cada vez que o botão é clicado para 
  // enviar algum dado.
  const handleSubmit = (e) => {
    e.preventDefault();

    // caso não tenha valores(os inputs estejam vazios, nada é acionado(executado)).
    if(!value || !category) return;

    setValue("");
    setCategory("");

    console.log(value, category);
  };

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Digite um título'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}
      value={category}
      >
        <option value="">Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
    </div>
  )
}

export default TodoForm
