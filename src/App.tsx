import React from "react";
import "./App.css";

// hooks
import { useState } from "react";

function App() {
  const [text, setText] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>React + typescript</h1>
      <hr />
      <form onSubmit={(e) => e.preventDefault}>
        <input type="text" placeholder="Digite sua tarefa" />
        <input
          type="button"
          onClick={() => {
            setText("fazendo tarefa");
          }}
        />
      </form>
      {text ? (
        <div>
          <p>{text}</p>
        </div>
      ) : (
        <div>
          <p>Sem tarefas</p>
        </div>
      )}
    </div>
  );
}

export default App;
