import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, id, children, onClick }) => (
	<>
		<button type='button' className={className} id={id} onClick={onClick}>
			{children}
		</button>
	</>
)

Button.propTypes = {
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
	className: null,
	id: null,
	onClick: null,
}

export default Button
