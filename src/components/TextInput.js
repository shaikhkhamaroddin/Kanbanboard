import React from 'react';

function TextInput(props) {
    const { type, id, placeholder, name, onChange, value } = props;
    return (
        <input type={type} className="form-control" id={id} placeholder={placeholder} name={name}
            value={value} onChange={onChange} />
    )
}

export default TextInput;