import React, { useState } from 'react';

function Main(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

        const onButtonClick = (e) => {
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
            setPhone(localStorage.getItem('phone'))
        }

        const clearInput = () => {
           setName('');
           setEmail('');
           setPhone('');
        }

        return (
            <div>
                <input 
                    placeholder="name" 
                    name="name"
                    className='nameInput'
                    defaultValue={name} 
                    onChange={(event) => props.onNameChange(event.target.value)}
                    onBlur={() => clearInput()}
                    type="text">
                </input>
                <input 
                    placeholder="email" 
                    name="email" 
                    defaultValue={email} 
                    onChange={(event) => props.onEmailChange(event.target.value)} 
                    onBlur={() => clearInput()}
                    type="email">
                </input>
                <input 
                    placeholder="phone" 
                    name="phone" 
                    defaultValue={phone} 
                    onChange={(event) => props.onPhoneChange(event.target.value)}  
                    onBlur={() => clearInput()}
                    type="text">
                </input>
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Main;