import React, { useState } from 'react';


function Main(props) {
        // eslint-disable-next-line no-unused-vars
        const [state, setState] = useState({
            name: '',
            email: '',
            phone: '',
            
        });

        const onButtonClick = (e) => {
            setState({
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                phone: localStorage.getItem('phone'),
            })
        }

        return (
            <div>
                <input 
                    placeholder="name" 
                    name="name"
                    defaultValue={state.name} 
                    onChange={(event) => props.onNameChange(event.target.value)}
                    type="text">
                </input>
                <input 
                    placeholder="email" 
                    name="email" 
                    defaultValue={state.email} 
                    onChange={(event) => props.onEmailChange(event.target.value)} 
                    type="email">
                </input>
                <input 
                    placeholder="phone" 
                    name="phone" 
                    defaultValue={state.phone} 
                    onChange={(event) => props.onPhoneChange(event.target.value)}  
                    type="text">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Main;