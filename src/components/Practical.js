import React, { useState } from 'react';
import TextField from './TextField';

function Practical(props) {

    const [companyName, setCompanyName] = useState('');
    const [titleWork, setTitleWork] = useState('');
    const [tasks, setTasks] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const onButtonClick = (e) => {
            setCompanyName(localStorage.getItem('companyName'))
            setTitleWork(localStorage.getItem('titleWork'))
            setTasks(localStorage.getItem('tasks'))
            setDateFrom(localStorage.getItem('dateFrom'))
            setDateTo(localStorage.getItem('dateTo'))
    }

    const clearInput = (val) => {
        if(val === 1) {
            setCompanyName('')
        } else if (val === 2) {
            setTitleWork('');
        } else if (val === 3) {
            setTasks('');
        } else if (val === 4) {
            setDateFrom('')
        }  else if (val === 5) {
            setDateTo('')
        }else {
            console.log('error');
        }
    }

        return (
            <div>
                 <TextField 
                    placeholder="companyName" 
                    name="companyName" 
                    value={companyName} 
                    onChange={(event) => {
                        setCompanyName(event.target.value)
                        props.onCompanyNameChange(event.target.value)
                    }}
                    onBlur={() => clearInput(1)}
                    type="text"
                />
                <TextField 
                    placeholder="titleWork" 
                    name="titleWork" 
                    value={titleWork} 
                    onChange={(event) => {
                        setTitleWork(event.target.value)
                        props.onTitleWorkChange(event.target.value)
                    }}
                    onBlur={() => clearInput(2)}
                    type="text">
                </TextField>
                <TextField 
                    placeholder="tasks" 
                    name="tasks" 
                    value={tasks} 
                    onChange={(event) => {
                        setTasks(event.target.value)
                        props.onTasksChange(event.target.value)
                    }}
                    onBlur={() => clearInput(3)}
                    type="text"
                />
                <TextField 
                    placeholder="dateFrom" 
                    name="dateFrom" 
                    value={dateFrom} 
                    onChange={(event) => {
                        setDateFrom(event.target.value)
                        props.onDateFromChange(event.target.value)
                    }}
                    onBlur={() => clearInput(4)}
                    type="date"
                />
                <TextField 
                    placeholder="dateTo" 
                    name="dateTo" 
                    value={dateTo} 
                    onChange={(event) => {
                        setDateTo(event.target.value)
                        props.onDateToChange(event.target.value)
                    }}
                    onBlur={() => clearInput(5)}
                    type="date"
                /> 
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Practical;