import React, { useState } from 'react';
import TextField from './TextField';

function Personal(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

        const onButtonClick = (e) => {
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
            setPhone(localStorage.getItem('phone'))
        }

        const clearInput = (val) => {
            if(val === 1) {
                setName('')
            } else if (val === 2) {
                setEmail('');
            } else if (val === 3) {
                setPhone('');
            } else {
                console.log('error');
            }
        }

        return (
            <div>
                 <TextField 
                    placeholder='name'
                    name="name"
                    className='nameInput'
                    value={name} 
                    onChange={(event) => {
                        setName(event.target.value)
                        props.onNameChange(event.target.value)
                        }}
                    onBlur={() => clearInput(1)}
                    type="text"
                />
                 <TextField 
                    placeholder='email'
                    name="email"
                    className='emailInput'
                    value={email} 
                     onChange={(event) => {
                        setEmail(event.target.value)
                        props.onEmailChange(event.target.value)
                        }}
                    onBlur={() => clearInput(2)}
                    type="text"
                />
                 <TextField 
                    placeholder={'phone'}
                    name="phone"
                    className='phoneInput'
                    value={phone} 
                     onChange={(event) => {
                        setPhone(event.target.value)
                        props.onPhoneChange(event.target.value)
                        }}
                    onBlur={() => clearInput(3)}
                    type="text"
                /> 
                <button type="submit" onClick={onButtonClick}> Click me to edit</button>
            </div>
        )
}

export default Personal;