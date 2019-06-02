import React from 'react';

const FormDivider = ({text}) => (
    <span>
        <div className="divider"></div>
        <div className="divider-text">{text}</div>
        <div className="divider"></div>
    </span>
)

export default FormDivider;