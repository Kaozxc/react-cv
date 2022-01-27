import React, { useState } from 'react';
import TextField from './TextField';


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
        if(val === 1) {
            setSchoolName('')
        } else if (val === 2) {
            setTitleStudy('');
        } else if (val === 3) {
            setDateStudy('');
        } else {
            console.log('error');
        }
    }
    
        return (
            <div>
                <TextField 
                    placeholder="schoolName" 
                    name="schoolName" 
                    value={schoolName}
                    onChange={(event) => {
                        setSchoolName(event.target.value)
                        props.onSchoolNameChange(event.target.value)
                        }}
                    onBlur={() => clearInput(1)}
                    type="text"
                 />
                {/* <TextField 
                    placeholder="titleStudy" 
                    name="titleStudy" 
                    value={titleStudy} 
                    onChange={(event) => {
                        setTitleStudy(localStorage.setItem('titleStudy', event.target.value))
                    }}
                    onBlur={() => clearInput(2)}
                    type="text"
                />
                <TextField 
                    placeholder="dateStudy" 
                    name="dateStudy" 
                    value={dateStudy} 
                    onChange={(event) => {
                        setDateStudy(localStorage.setItem('dateStudy', event.target.value));
                    }}
                    onBlur={() => clearInput(3)}
                    type="date"
                /> */}
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Educational;