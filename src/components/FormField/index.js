import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  transition: all 0.2s ease;

  & > input,
  & > textarea {
    border: 1px solid var(--grayMedium);
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 1;
    resize: vertical;
  }

  & > label {
    color: grey;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 1;

    ${(props) => props.focused
    && `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 2;
      background: white;
      padding: 0 8px;
    `}
  }

  `;

function FormField({
  label, value, type, name, onChange,
}) {
  const [focused] = React.useState(false);
  const isFocused = focused || String(value).length || type === 'date';
  const fieldId = `id_${name}`;

  return (
    <InputContainer className="input-container" focused={isFocused}>
      {type === 'textarea' ? (
        <textarea
          value={value}
          name={name}
          onChange={onChange}
          rows="2"
        />
      )
        : (
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        )}
      <label htmlFor={fieldId} className="label">
        {label}
      </label>
    </InputContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormField;
