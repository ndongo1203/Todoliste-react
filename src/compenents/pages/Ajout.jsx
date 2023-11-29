import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

function Ajout() {
    // stocker les tâches
    const [ToDo, setToDo] = useState([]);
    // stocker la nouvelle tâche à ajouter
    const [newToDo, setNewToDo] = useState('');

    // Fonction pour ajouter une nouvelle tâche
    const addTask = () => {
        if (newToDo.trim() !== '') {
            setToDo([...ToDo, newToDo]);
            setNewToDo('');
        }
    };

    // Fonction pour supprimer une tâche
    const removeTodo = (index) => {
        const newToDo = [...ToDo];
        newToDo.splice(index, 1);
        setToDo(newToDo);
    };


    return (
        <>
        <div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ajouter une nouvelle tâche"
                    aria-label="Ajouter une nouvelle tâche"
                    onChange={(e) => setNewToDo(e.target.value)}
                    value={newToDo}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={addTask}>
                    Ajouter
                </button>
            </div>
            {/* Affichage de la liste des tâches */}
            <ul className='list-group'>
                {ToDo.map((todo, index) => (
                    <li className='d-flex justify-content-between list-group-item text-white border-0  mb-4 bg-black' key={index}>{todo}
                    <button onClick={() => removeTodo(index)} className='text-danger border-0 bg-transparent justify-content-md-end'>
                    <BiTrash className='text-end' />
                    </button>
                    </li> 
                   
                ))}
            </ul>
        </div >
        </>
    );
}

export default Ajout;
