import { Component, useState } from 'react';
import './App.css';
import Educational from './components/Educational';
import Main from './components/Main';
import Practical from './components/Practical';
import Output from './components/Output';

const App = (props) => {

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

  //setName(localStorage.getItem('name'))

    return (
      <div className="App">
       <Main 
         onNameChange={(value) => {
          localStorage.setItem('name', value);
          setName(value)
          return;
         }}
         onEmailChange={(value) => {
          localStorage.setItem('email', value);
          setEmail(value)
          return;
         }}
         onPhoneChange={(value) => {
          localStorage.setItem('phone', value);
          setPhone(value)
          return;
         }}
    />
       <Educational
         onSchoolNameChange={(value) => {
          localStorage.setItem('schoolName', value);
          setSchoolName(value)
          return;
         }}
         onTitleStudyChange={(value) => {
          localStorage.setItem('titleStudy', value);
          setTitleStudy(value)
          return;
         }}
         onDateStudyChange={(value) => {
          localStorage.setItem('dateStudy', value);
          setDateStudy(value)
          return;
         }}
       />
       <Practical
         onCompanyNameChange={(value) => {
          localStorage.setItem('companyName', value);
          setCompanyName(value)
          return;
         }}
         onTitleWorkChange={(value) => {
          localStorage.setItem('titleWork', value);
          setTitleWork(value)
          return;
         }}
         onTasksChange={(value) => {
          localStorage.setItem('tasks', value);
          setTasks(value)
          return;
         }}
         onDateFromChange={(value) => {
          localStorage.setItem('dateFrom', value);
          setDateFrom(value)
          return;
         }}
         onDateToChange={(value) => {
          localStorage.setItem('dateTo', value);
          setDateTo(value)
          return;
         }}
       />
       <Output 
        name={name}
        email={email}
        phone={phone} 
        schoolName={schoolName} 
        titleStudy={titleStudy} 
        dateStudy={dateStudy} 
        companyName={companyName} 
        titleWork={titleWork} 
        tasks={tasks} 
        dateFrom={dateFrom} 
        dateTo={dateTo} 
       />
      </div>
    );
  }

export default App;
