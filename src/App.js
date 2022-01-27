import { useState } from 'react';
import './App.css';
import Educational from './components/Educational';
import Personal from './components/Personal';
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

    return (
      <div className="App">
       <Personal 
         onNameChange={(value) => {
          localStorage.setItem('name', value);
          setName(value)
         }}
         onEmailChange={(value) => {
          localStorage.setItem('email', value);
          setEmail(value)
         }}
         onPhoneChange={(value) => {
          localStorage.setItem('phone', value);
          setPhone(value)
         }}
    /> 
       <Educational
         onSchoolNameChange={(value) => {
          localStorage.setItem('schoolName', value);
          setSchoolName(value)
         }}
         onTitleStudyChange={(value) => {
          localStorage.setItem('titleStudy', value);
          setTitleStudy(value)
         }}
         onDateStudyChange={(value) => {
          localStorage.setItem('dateStudy', value);
          setDateStudy(value)
         }}
       />
        <Practical
         onCompanyNameChange={(value) => {
          localStorage.setItem('companyName', value);
          setCompanyName(value)
         }}
         onTitleWorkChange={(value) => {
          localStorage.setItem('titleWork', value);
          setTitleWork(value)
         }}
         onTasksChange={(value) => {
          localStorage.setItem('tasks', value);
          setTasks(value)
         }}
         onDateFromChange={(value) => {
          localStorage.setItem('dateFrom', value);
          setDateFrom(value)
         }}
         onDateToChange={(value) => {
          localStorage.setItem('dateTo', value);
          setDateTo(value)
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
