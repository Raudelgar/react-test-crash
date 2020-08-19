import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, desc } = this.props;
		if (!title) {
			return null;
		} else {
			return (
				<div data-test='test-headline'>
					<h3>{title}</h3>
					<button>{desc}</button>
				</div>
			);
		}
	}
}

Headline.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
};
