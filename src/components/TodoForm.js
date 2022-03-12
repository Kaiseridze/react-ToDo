import React, { useState } from "react";


function TodoForm({ addTodo }) {
   const [userInput, setUserInput] = useState('');
   const handleChange = (e) => {
      setUserInput(e.currentTarget.value) 
   }
   
   const handleSubmit = (e) => {
      e.preventDefault()
      addTodo(userInput)
      setUserInput('') 
   }

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         handleSubmit(e)
      }
   }
   return (
      <form
         onSubmit={handleSubmit}
         action="">
         <input
            type="text"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder='Введите название...'
         />
         <button>Создать</button>
      </form>
   )
}

export default TodoForm
