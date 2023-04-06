import React from 'react';
import './App.css';
import {ParentComponent} from "./components/ParentComponent";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Повторный рендеринг вложенных компонентов или магия <code>'{'children'}'</code>
        </p>
      </header>

      <ParentComponent/>
    </div>
  );
}