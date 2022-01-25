import React, { useState } from 'react';

function Practical(props) {
    // eslint-disable-next-line no-unused-vars
    const [state,setState] = useState({
        companyName: '',
        titleWork: '',
        tasks: '',
        dateFrom: '',
        dateTo: '',
    });

    const onButtonClick = (e) => {
        setState({
            companyName: localStorage.getItem('companyName'),
            titleWork: localStorage.getItem('titleWork'),
            tasks: localStorage.getItem('tasks'),
            dateFrom: localStorage.getItem('dateFrom'),
            dateTo: localStorage.getItem('dateTo'),
        })
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
                    defaultValue={state.companyName} 
                    onChange={(event) => props.onCompanyNameChange(event.target.value)} 
                    onBlur={(event) => clearInput('companyName')}
                    type="text">
                </input>
                <input 
                    placeholder="titleWork" 
                    name="titleWork" 
                    defaultValue={state.titleWork} 
                    onChange={(event) => props.onTitleWorkChange(event.target.value)} 
                    onBlur={(event) => clearInput('titleWork')}
                    type="text">
                </input>
                <input 
                    placeholder="tasks" 
                    name="tasks" 
                    defaultValue={state.tasks} 
                    onChange={(event) => props.onTasksChange(event.target.value)}  
                    onBlur={(event) => clearInput('tasks')}
                    type="text">
                </input>
                <input 
                    placeholder="dateFrom" 
                    name="dateFrom" 
                    defaultValue={state.dateFrom} 
                    onChange={(event) => props.onDateFromChange(event.target.value)} 
                    onBlur={(event) => clearInput('dateFrom')}
                    type="date">
                </input>
                <input 
                    placeholder="dateTo" 
                    name="dateTo" 
                    defaultValue={state.dateTo} 
                    onChange={(event) => props.onDateToChange(event.target.value)}
                    onBlur={(event) => clearInput('dateTo')}
                    type="date">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Practical;