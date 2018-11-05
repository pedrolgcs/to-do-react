import React from 'react';
import Header from './components/Header'
import ToDoCard from './components/to-do-card'
import './App.css'

const App = () => {
  return (
    <div className = 'App'>
      <Header />
      <main> 
        <ToDoCard />
      </main>
      <footer> 

      </footer>
    </div>
  );
}

export default App;
