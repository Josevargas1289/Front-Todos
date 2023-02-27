import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const TodosList = ({ todoList, selectTodo, getTodos }) => {

    const todoListOrder = todoList.sort((a,b) => a.title.localeCompare(b.title));

    const deletTodo =(todos)=>{
        axios.delete(`http://localhost:8005/api/v1/todos/${todos.id}`)
        .then(()=>getTodos());
    }

    return (
        <div className='container-table' >

            
                <Table striped bordered hover variant="primary">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Update</th>
                            <th>Delete</th>


                           
                        </tr>
                    </thead>
                    {todoListOrder.map(todos => (
                    <tbody key={todos.id}>
                        <tr>
                            <td>{todos.id}</td>
                            <td>{todos.title}</td>
                            <td>{todos.description}</td>
                            <td>{todos.status.toString()}</td>
                            <td><Button onClick={()=>selectTodo(todos)} variant='danger'>Select</Button></td>
                            <td><Button onClick={()=>deletTodo(todos)} variant='danger'>Delete</Button></td>

                        </tr>
                       
                    </tbody>
                     ))}
                </Table>

           
        </div>
    );
};

export default TodosList;