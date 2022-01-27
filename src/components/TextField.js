import React from 'react';


const TextField = (props) => {
    return (
        <div>
            <input 
                placeholder={props.placeholder} 
                name={props.name} 
                className={props.className} 
                value={props.value} 
                onChange={props.onChange}
                onBlur={props.onBlur}
                type={props.type}>
            </input>
        </div>
    )
}

export default TextField;