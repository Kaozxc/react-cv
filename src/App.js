import { Component, useState } from 'react';
import './App.css';
import Educational from './components/Educational';
import Main from './components/Main';
import Practical from './components/Practical';
import Output from './components/Output';

const App = (props) => {
  const [state, setState] = useState({
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phone'),
      schoolName: localStorage.getItem('schoolName'),
      titleStudy: localStorage.getItem('titleStudy'),
      dateStudy: localStorage.getItem('dateStudy'),
      companyName: localStorage.getItem('companyName'),
      titleWork: localStorage.getItem('titleWork'),
      tasks: localStorage.getItem('tasks'),
      dateFrom: localStorage.getItem('dateFrom'),
      dateTo: localStorage.getItem('dateTo'),
    })

    return (
      <div className="App">
       <Main 
         onNameChange={(value) => {
          localStorage.setItem('name', value);
          setState({ 'name': value}); 
          return;
         }}
         onEmailChange={(value) => {
          localStorage.setItem('email', value);
          setState({ 'email': value}); 
          return;
         }}
         onPhoneChange={(value) => {
          localStorage.setItem('phone', value);
          setState({ 'phone': value}); 
          return;
         }}
    />
       <Educational
         onSchoolNameChange={(value) => {
          localStorage.setItem('schoolName', value);
          setState({ 'schoolName': value}); 
          return;
         }}
         onTitleStudyChange={(value) => {
          localStorage.setItem('titleStudy', value);
          setState({ 'titleStudy': value}); 
          return;
         }}
         onDateStudyChange={(value) => {
          localStorage.setItem('dateStudy', value);
          setState({ 'dateStudy': value}); 
          return;
         }}
       />
       <Practical
         onCompanyNameChange={(value) => {
          localStorage.setItem('companyName', value);
          setState({ 'companyName': value}); 
          return;
         }}
         onTitleWorkChange={(value) => {
          localStorage.setItem('titleWork', value);
          setState({ 'titleWork': value}); 
          return;
         }}
         onTasksChange={(value) => {
          localStorage.setItem('tasks', value);
          setState({ 'tasks': value}); 
          return;
         }}
         onDateFromChange={(value) => {
          localStorage.setItem('dateFrom', value);
          setState({ 'dateFrom': value}); 
          return;
         }}
         onDateToChange={(value) => {
          localStorage.setItem('dateTo', value);
          setState({ 'dateTo': value}); 
          return;
         }}
       />
       <Output 
        name={state.name}
        email={state.email}
        phone={state.phone} 
        schoolName={state.schoolName} 
        titleStudy={state.titleStudy} 
        dateStudy={state.dateStudy} 
        companyName={state.companyName} 
        titleWork={state.titleWork} 
        tasks={state.tasks} 
        dateFrom={state.dateFrom} 
        dateTo={state.dateTo} 
       />
      </div>
    );
  }

export default App;
