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

    const clearInput = (val) => {
        let nameInput = document.getElementsByName(val)[0].value;
        console.log(nameInput)
        document.getElementsByName(val)[0].value = ""
    }
    
        return (
            <div>
                <input 
                    placeholder="schoolName" 
                    name="schoolName" 
                    defaultValue={state.schoolName}
                    onChange={(event) => props.onSchoolNameChange(event.target.value)} 
                    onBlur={(event) => clearInput('schoolName')}
                    type="text">
                 </input>
                <input 
                    placeholder="titleStudy" 
                    name="titleStudy" 
                    defaultValue={state.titleStudy} 
                    onChange={(event) => props.onTitleStudyChange(event.target.value)} 
                    onBlur={(event) => clearInput('titleStudy')}
                    type="text">
                </input>
                <input 
                    placeholder="dateStudy" 
                    name="dateStudy" 
                    defaultValue={state.dateStudy} 
                    onChange={(event) => props.onDateStudyChange(event.target.value)} 
                    onBlur={(event) => clearInput('dateStudy')}
                    type="date">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Educational;