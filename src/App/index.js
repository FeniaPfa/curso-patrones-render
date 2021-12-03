import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App(){

  const [state, setState] = React.useState('estado compartido');

  return (

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
