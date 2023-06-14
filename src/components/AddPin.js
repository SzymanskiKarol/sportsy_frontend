import axios from "axios";
import { AppContext } from "../helpers/AppContext"
import React, { useContext, useState } from 'react'
import Select from 'react-select';

const disciplineOptions = [
    { value: 'running', label: '🏃 Running ' },
    { value: 'bike', label: '🚲 Bike' },
    { value: 'gym', label: '🏋️ Gym/Workout' },
    { value: 'other', label: '❓ Other' }
];

export const AddPin = () => {
    const { lat, long, pins, setPins, setShowForm } = useContext(AppContext)

    const [discipline, setDiscipline] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(discipline.value, title, desc, lat, long);

        const pin = { username: "Ksiunc", title, desc, sport: discipline.value, lat, long }

        // axios.post('http://localhost:8000/api/pins/', { pin }).then((response) => {
        //     console.log(response);
        // }).catch((err) => { console.log(err); })


        const response = await fetch('http://localhost:8000/api/pins/', {
            method: 'POST',
            body: JSON.stringify(pin),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json()
        setPins([...pins, json])
        console.log(json);
        setShowForm(false)
    }

    return (
        <div className='form-container'>
            <button onClick={() => setShowForm(false)}>X</button>
            <form onSubmit={handleSubmit}>
                <h2>Add a new place</h2>
                <div className="row">
                    <label htmlFor="">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)}
                        type="text" />
                </div>
                <div className="row">
                    <label htmlFor="">Description (max. 200 words)</label>
                    <input onChange={(e) => setDesc(e.target.value)}
                        type="text" />
                </div>
                <div className="row">
                    <label htmlFor="">Discipline</label>
                    <Select
                        defaultValue={discipline}
                        onChange={setDiscipline}
                        options={disciplineOptions}
                    />
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}
