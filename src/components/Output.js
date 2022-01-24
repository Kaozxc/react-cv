import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div>
                <div className='main'>
                    <label> Name: {this.props.name}</label><br/>
                    <label> Email: {this.props.email}</label><br/>
                    <label> Phone: {this.props.phone}</label><br/>
                </div>
                <div className='educational'>
                    <label> School: {this.props.schoolName}</label><br/>
                    <label> School Title: {this.props.titleStudy}</label><br/>
                    <label> Date Study: {this.props.dateStudy}</label><br/>
                </div>
                <div className='practical'> 
                    <label> Company Name: {this.props.companyName}</label><br/>
                    <label> Title Work: {this.props.titleWork}</label><br/>
                    <label> Tasks: {this.props.tasks}</label><br/>
                    <label> Date From: {this.props.dateFrom}</label><br/>
                    <label> Date To: {this.props.dateTo}</label><br/>
                </div>
            </div>
        )
    }
}

export default Output;