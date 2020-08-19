import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItems extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, desc } = this.props;
		if (!title) {
			return null;
		}
		return (
			<div data-test='item'>
				<h2>{title}</h2>
				<p>{desc}</p>
			</div>
		);
	}
}

ListItems.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
};
