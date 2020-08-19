import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button data-test='btn-post' onClick={this.props.event}>
				{this.props.text}
			</button>
		);
	}
}

Button.propTypes = {
	text: PropTypes.string,
	event: PropTypes.func,
};
