import React, { useState } from 'react';
import './style.css';

function Output(props) {
        const [state, setState] = useState({
            name: '',
            email: '',
            phone: '',
            schoolName: '',
            titleStudy: '',
            dateStudy: '',
            companyName: '',
            titleWork: '',
            tasks: '',
            dateFrom: '',
            dateTo: '',
        });

        const onButtonClick = () => {
            setState({
                name: localStorage.setItem('name', 'John'),
                email: localStorage.setItem('email', 'Email@gmail.com'),
                phone: localStorage.setItem('phone', '444-555-666'),
                schoolName: localStorage.setItem('schoolName', 'School Name'),
                titleStudy: localStorage.setItem('titleStudy', 'Title Study'),
                dateStudy: localStorage.setItem('dateStudy', '2022-01-19'),
                companyName: localStorage.setItem('companyName', 'Company Name'),
                titleWork: localStorage.setItem('titleWork', 'Title Work'),
                tasks: localStorage.setItem('tasks', 'List of Tasks'),
                dateFrom: localStorage.setItem('dateFrom', '2022-01-25'),
                dateTo: localStorage.setItem('dateTo', '2022-01-25'),
            })
            window.location.reload(true);
        }

        const onButtonClear = () => {
            window.localStorage.clear();
            window.location.reload(true);
        }
        // Not sure if that doesn't overcomplicated code
        function ls(val) {
            return localStorage.getItem(val);
        }

        return (
            <div>
                <label className='header'>Personal Information:</label>
                <div className='main'>
                    <label> Name: {ls('name')}</label><br/>
                    <label> Email: {localStorage.getItem('email')}</label><br/>
                    <label> Phone: {localStorage.getItem('phone')}</label><br/>
                </div><br/>
                <label className='header'>Educational Information:</label>
                <div className='educational'>
                    <label> School: {localStorage.getItem('schoolName')}</label><br/>
                    <label> School Title: {localStorage.getItem('titleStudy')}</label><br/>
                    <label> Date Study: {localStorage.getItem('dateStudy')}</label><br/>
                </div><br/>
                <label className='header'>Practical Experience:</label>
                <div className='practical'>
                    <label> Company Name: {localStorage.getItem('companyName')}</label><br/>
                    <label> Title Work: {localStorage.getItem('titleWork')}</label><br/>
                    <label> Tasks: {localStorage.getItem('tasks')}</label><br/>
                    <label> Date when started: {localStorage.getItem('dateFrom')}</label><br/>
                    <label> Worked till: {localStorage.getItem('dateTo')}</label><br/>
                </div>
                <button type="button" onClick={onButtonClear}> Click me to clear whole page</button>
                <button type="button" onClick={onButtonClick}>Click to get test values</button>
            </div>
        )
}

export default Output;