import React from 'react'

function Todo() {
  return (
    <>
      <div className='todo'>
              <div className="content">
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
              </div>
              <div>
                <button>completar</button>
                <button>X</button>
              </div>
        </div>
    </>
  )
}

export default Todo
