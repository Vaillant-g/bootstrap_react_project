import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';

class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ToDoList></ToDoList>
                <NavBar></NavBar>

            </section>

        );
    }
}

export default App;