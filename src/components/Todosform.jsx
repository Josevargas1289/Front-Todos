import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const Todosform = ({getTodos, todosSelect, selectTodo}) => {

const {handleSubmit, register, reset}= useForm();
const defaultTodo = {title: '', description: '', status: '' }


useEffect(()=>{
    if(todosSelect){
 
        reset({title: todosSelect.title, description: todosSelect.description, status: todosSelect.status })
    }else{
        reset(defaultTodo)
    }

},[todosSelect])

const submit = (data) => {
    if (todosSelect) {
        axios.put(`http://localhost:8005/api/v1/todos/${todosSelect.id}`, data)
        .then(() =>{
         getTodos()
         selectTodo(null)
        reset(defaultTodo)

        });
    }else{
        axios.post('http://localhost:8005/api/v1/todos', data)
        .then(() =>{
         getTodos()
        reset(defaultTodo)

        });
       
    }
    
}

    return (
        <form onSubmit={handleSubmit(submit)} className='containet-todoform'>
            <div className='form-title'>
                <h3 className='title-form'>Todos Form</h3>
            </div>
            <div className="input-container">
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                id='title' 
                {...register('title')}
                />

            </div>

            <div className="input-container">
                <label htmlFor="description">Description:</label>
                <input 
                type="textarea "
                id='description'
                {...register('description')} 
                />

            </div>

            <div className="input-container-check">
                <label htmlFor="status">Done:</label>
                <input 
                type="checkbox"
                id='status' 
                {...register('status')}
                />

            </div>
            <button onClick={submit}>Submit</button>



        </form>
    );
};

export default Todosform;