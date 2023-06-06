import React, { useState } from 'react'
import Select from 'react-select';

const disciplineOptions = [
    { value: 'running', label: 'Running' },
    { value: 'bike', label: 'Bike' },
    { value: 'gym', label: 'Gym/Workout' },
];

export const AddPin = () => {
    const [discipline, setDiscipline] = useState('')

    return (
        <div className='form-container'>
            <form>
                <h2>Add a new place</h2>
                <div className="row">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label htmlFor="">Description (max. 200 words)</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label htmlFor="">Discipline</label>
                    <Select
                        defaultValue={discipline}
                        onChange={setDiscipline}
                        options={disciplineOptions}
                    />
                </div>
            </form>
        </div>
    )
}
