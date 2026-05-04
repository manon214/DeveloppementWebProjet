import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue); // Transmet l'information au composant parent
      setInputValue("");    // Réinitialise le champ de saisie
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskInput;
