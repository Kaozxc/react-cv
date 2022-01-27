import React, { useState } from 'react';

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
        let nameInput = document.getElementsByName(val)[0].value;
        console.log(nameInput)
        document.getElementsByName(val)[0].value = ""
    }

        return (
            <div>
                <input 
                    placeholder="companyName" 
                    name="companyName" 
                    defaultValue={companyName} 
                    onChange={(event) => props.onCompanyNameChange(event.target.value)} 
                    onBlur={(event) => clearInput('companyName')}
                    type="text">
                </input>
                <input 
                    placeholder="titleWork" 
                    name="titleWork" 
                    defaultValue={titleWork} 
                    onChange={(event) => props.onTitleWorkChange(event.target.value)} 
                    onBlur={(event) => clearInput('titleWork')}
                    type="text">
                </input>
                <input 
                    placeholder="tasks" 
                    name="tasks" 
                    defaultValue={tasks} 
                    onChange={(event) => props.onTasksChange(event.target.value)}  
                    onBlur={(event) => clearInput('tasks')}
                    type="text">
                </input>
                <input 
                    placeholder="dateFrom" 
                    name="dateFrom" 
                    defaultValue={dateFrom} 
                    onChange={(event) => props.onDateFromChange(event.target.value)} 
                    onBlur={(event) => clearInput('dateFrom')}
                    type="date">
                </input>
                <input 
                    placeholder="dateTo" 
                    name="dateTo" 
                    defaultValue={dateTo} 
                    onChange={(event) => props.onDateToChange(event.target.value)}
                    onBlur={(event) => clearInput('dateTo')}
                    type="date">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Practical;