import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })} 
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
};

TextAreaFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  error: propTypes.string.isRequired,
  info: propTypes.string,
  onChange: propTypes.func.isRequired
}


export default TextAreaFieldGroup;
