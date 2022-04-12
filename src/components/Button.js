import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, id, children, onClick,
}) => (
  <>
    <button type="button" className={className} id={id} onClick={onClick}>
      {children}
    </button>
  </>
);

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  id: null,
};

export default Button;
