import React from 'react';

const SummaryCards = ({iconClasses, title, descrition}) => (
    <div className='summary-box'>
        <i className={iconClasses}></i>
        <h3>{title}</h3>
        <p>{descrition}</p>
    </div>
)

export default SummaryCards;