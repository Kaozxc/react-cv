import { Component } from 'react';
import './App.css';
import Educational from './components/Educational';
import Main from './components/Main';
import Practical from './components/Practical';
import Output from './components/Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }
  render() {
    const { state } = this;
    return (
      <div className="App">
       <Main 
         onNameChange={(value) => {
          localStorage.setItem('name', value);
          this.setState({ 'name': value}); 
          return;
         }}
         onEmailChange={(value) => {
          localStorage.setItem('email', value);
          this.setState({ 'email': value}); 
          return;
         }}
         onPhoneChange={(value) => {
          localStorage.setItem('phone', value);
          this.setState({ 'phone': value}); 
          return;
         }}
    />
       <Educational
         onSchoolNameChange={(value) => {
          localStorage.setItem('schoolName', value);
          this.setState({ 'schoolName': value}); 
          return;
         }}
         onTitleStudyChange={(value) => {
          localStorage.setItem('titleStudy', value);
          this.setState({ 'titleStudy': value}); 
          return;
         }}
         onDateStudyChange={(value) => {
          localStorage.setItem('dateStudy', value);
          this.setState({ 'dateStudy': value}); 
          return;
         }}
       />
       <Practical
         onCompanyNameChange={(value) => {
          localStorage.setItem('companyName', value);
          this.setState({ 'companyName': value}); 
          return;
         }}
         onTitleWorkChange={(value) => {
          localStorage.setItem('titleWork', value);
          this.setState({ 'titleWork': value}); 
          return;
         }}
         onTasksChange={(value) => {
          localStorage.setItem('tasks', value);
          this.setState({ 'tasks': value}); 
          return;
         }}
         onDateFromChange={(value) => {
          localStorage.setItem('dateFrom', value);
          this.setState({ 'dateFrom': value}); 
          return;
         }}
         onDateToChange={(value) => {
          localStorage.setItem('dateTo', value);
          this.setState({ 'dateTo': value}); 
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
  }

export default App;
