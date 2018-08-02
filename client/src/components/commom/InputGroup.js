import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} ></i>
        </span>
      </div>      
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon={icon}
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })} 
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup;
