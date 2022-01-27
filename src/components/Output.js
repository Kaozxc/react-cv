import React, { useState } from 'react';
import './style.css';

function Output(props) {
    /* eslint-disable no-unused-vars */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [titleStudy, setTitleStudy] = useState('');
    const [dateStudy, setDateStudy] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [titleWork, setTitleWork] = useState('');
    const [tasks, setTasks] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

        const onButtonClick = () => {
            setName(localStorage.setItem('name', 'John'))
            setEmail(localStorage.setItem('email', 'Email@gmail.com'))
            setPhone(localStorage.setItem('phone', '444-555-666'))
            setSchoolName(localStorage.setItem('schoolName', 'School Name'))
            setTitleStudy(localStorage.setItem('titleStudy', 'Title Study'))
            setDateStudy(localStorage.setItem('dateStudy', '2022-01-19'))
            setCompanyName(localStorage.setItem('companyName', 'Company Name'))
            setTitleWork(localStorage.setItem('titleWork', 'Title Work'))
            setTasks(localStorage.setItem('tasks', 'List of Tasks'))
            setDateFrom(localStorage.setItem('dateFrom', '2022-01-25'))
            setDateTo(localStorage.setItem('dateTo', '2022-01-25'))
        }

        const onButtonClear = () => {
            window.localStorage.clear();
            window.location.reload(true);
        }

        return (
            <div>
                <label className='header'>Personal Information:</label>
                <div className='personal'>
                    <label> Name: {localStorage.getItem('name')}</label><br/>
                    {console.log('LS getitem name:',localStorage.getItem('name'))}
                    <label> Email: {localStorage.getItem('email')}</label><br/>
                    <label> Phone: {localStorage.getItem('phone')}</label><br/>
                </div><br/>
                <label className='header'>Educational Information:</label>
                <div className='educational'>
                    <label> School: {localStorage.getItem('schoolName')}</label><br/>
                    {console.log('LS getitem schoolname:',localStorage.getItem('schoolName'))}
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