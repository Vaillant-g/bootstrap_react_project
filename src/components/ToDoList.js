import React from 'react';

const ToDoList = () => (
    <ul className="list-group m-3">
        <li className="list-group-item d-flex align-tiems-center">
            Tâche 1
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
            Tâche 2
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
            Tâche 3
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
            Tâche 4
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
    </ul>
)
export default ToDoList;