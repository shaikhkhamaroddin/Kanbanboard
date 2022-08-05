import React from 'react';

function Button(props) {
    const { title, onClick, disabled, className } = props;
    return (
        <button type={"button"} className={className}
            onClick={onClick} disabled={disabled === true | false} >
            {title}
        </button>
    )
}

export default Button;