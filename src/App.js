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
    }
  }
  render() {
    return (
      <div className="App">
       <Main 
         onNameChange={(value) => this.setState({ 'name': value})}  
         onEmailChange={(value) => this.setState({ 'email': value})} 
         onPhoneChange={(value) => this.setState({ 'phone': value})} 
    />
       <Educational
         onSchoolNameChange={(value) => this.setState({ 'schoolName': value})}  
         onTitleStudyChange={(value) => this.setState({ 'titleStudy': value})} 
         onDateStudyChange={(value) => this.setState({ 'dateStudy': value})} 
       />
       <Practical
         onCompanyNameChange={(value) => this.setState({ 'companyName': value})}  
         onTitleWorkChange={(value) => this.setState({ 'titleWork': value})} 
         onTasksChange={(value) => this.setState({ 'tasks': value})} 
         onDateFromChange={(value) => this.setState({ 'dateFrom': value})} 
         onDateToChange={(value) => this.setState({ 'dateTo': value})} 
       />
       <Output 
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone} 
        schoolName={this.state.schoolName} 
        titleStudy={this.state.titleStudy} 
        dateStudy={this.state.dateStudy} 
        companyName={this.state.companyName} 
        titleWork={this.state.titleWork} 
        tasks={this.state.tasks} 
        dateFrom={this.state.dateFrom} 
        dateTo={this.state.dateTo} 
       />
      </div>
    );
  }
  }

export default App;
