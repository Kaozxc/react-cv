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

        return (
            <div>
                <input 
                    placeholder="companyName" 
                    name="companyName" 
                    defaultValue={state.companyName} 
                    onChange={(event) => props.onCompanyNameChange(event.target.value)} 
                    type="text">
                </input>
                <input 
                    placeholder="titleWork" 
                    name="titleWork" 
                    defaultValue={state.titleWork} 
                    onChange={(event) => props.onTitleWorkChange(event.target.value)} 
                    type="text">
                </input>
                <input 
                    placeholder="tasks" 
                    name="tasks" 
                    defaultValue={state.tasks} 
                    onChange={(event) => props.onTasksChange(event.target.value)}  
                    type="text">
                </input>
                <input 
                    placeholder="dateFrom" 
                    name="dateFrom" 
                    defaultValue={state.dateFrom} 
                    onChange={(event) => props.onDateFromChange(event.target.value)} 
                    type="text">
                </input>
                <input 
                    placeholder="dateTo" 
                    name="dateTo" 
                    defaultValue={state.dateTo} 
                    onChange={(event) => props.onDateToChange(event.target.value)}
                    type="text">
                </input>
            </div>
        )
}

export default Practical;