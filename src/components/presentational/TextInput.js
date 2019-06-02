/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const textImput = ({
  label, type, id, name, onChange,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input onChange={onChange} type={type} id={id} className="input" name={name} />
    <br></br>
  </div>
);

textImput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default textImput;
