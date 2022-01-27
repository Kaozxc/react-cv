import React, { useState } from 'react';


function Educational(props) {

    const [schoolName, setSchoolName] = useState('');
    const [titleStudy, setTitleStudy] = useState('');
    const [dateStudy, setDateStudy] = useState('');

    const onButtonClick = (e) => {
        setSchoolName(localStorage.getItem('schoolName'))
        setTitleStudy(localStorage.getItem('titleStudy'))
        setDateStudy(localStorage.getItem('dateStudy'))
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
                    defaultValue={schoolName}
                    onChange={(event) => props.onSchoolNameChange(event.target.value)} 
                    onBlur={(event) => clearInput('schoolName')}
                    type="text">
                 </input>
                <input 
                    placeholder="titleStudy" 
                    name="titleStudy" 
                    defaultValue={titleStudy} 
                    onChange={(event) => props.onTitleStudyChange(event.target.value)} 
                    onBlur={(event) => clearInput('titleStudy')}
                    type="text">
                </input>
                <input 
                    placeholder="dateStudy" 
                    name="dateStudy" 
                    defaultValue={dateStudy} 
                    onChange={(event) => props.onDateStudyChange(event.target.value)} 
                    onBlur={(event) => clearInput('dateStudy')}
                    type="date">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Educational;