import React, { useState } from 'react';


function Educational(props) {
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        schoolName: '',
        titleStudy: '',
        dateStudy: '',
    })
    const onButtonClick = (e) => {
        setState({
            schoolName: localStorage.getItem('schoolName'),
            titleStudy: localStorage.getItem('titleStudy'),
            dateStudy: localStorage.getItem('dateStudy'),
        })
    }
    
        return (
            <div>
                <input 
                    placeholder="schoolName" 
                    name="schoolName" 
                    defaultValue={state.schoolName}
                    onChange={(event) => props.onSchoolNameChange(event.target.value)} 
                    type="text">
                 </input>
                <input 
                    placeholder="titleStudy" 
                    name="titleStudy" 
                    defaultValue={state.titleStudy} 
                    onChange={(event) => props.onTitleStudyChange(event.target.value)} 
                    type="text">
                </input>
                <input 
                    placeholder="dateStudy" 
                    name="dateStudy" 
                    defaultValue={state.dateStudy} 
                    onChange={(event) => props.onDateStudyChange(event.target.value)} 
                    type="date">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Educational;