/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Info = ({result, resultType}) => {
    const infoBody = result ? result.map((info, i) => <p className="info" key={i}>{info}</p>) : null;
    return (
    <div className={result ? `result-div-show ${resultType}`: ''}>{infoBody}</div>
)};

export default Info;
